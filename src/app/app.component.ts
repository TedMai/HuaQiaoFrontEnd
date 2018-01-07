import {AfterContentChecked, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from './service/hosptial.service';

import {LoginModalComponent} from './modal/login-modal/login-modal.component';
import {RegisterModalComponent} from './modal/register-modal/register-modal.component';
import {ContainerService} from './service/container.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, AfterContentChecked {
    registerSubscription: Subscription;
    loginSubscription: Subscription;
    isLoggedIn = false;
    headImageUrl = '../assets/icons/login/head-image.png';

    constructor(private router: Router,
                private modalService: NgbModal,
                private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    /**
     * 检测用户登录状态
     */
    ngAfterContentChecked() {
        const uid = this.container.getUserID();
        (typeof uid === 'undefined' || uid === null) ? this.isLoggedIn = false : this.isLoggedIn = true;
    }

    /**
     * 避免内存泄露
     */
    ngOnDestroy() {
        if (typeof this.registerSubscription !== 'undefined') {
            this.registerSubscription.unsubscribe();
        }
        if (typeof this.loginSubscription !== 'undefined') {
            this.loginSubscription.unsubscribe();
        }
    }

    /**
     * 显示登录对话框
     */
    showLoginModal() {
        const loginModalRef = this.modalService.open(LoginModalComponent);
        loginModalRef.result.then(
            (reason) => {
                switch (reason) {
                    case 'Login success':
                        // TODO: 登录成功后弹出登录成功的气泡提示
                        this.isLoggedIn = true;
                        break;
                    default:
                        break;
                }
            },
            (reason) => {
                switch (reason) {
                    case 'Register':
                        this.showRegisterModal();
                        break;
                    default:
                        break;
                }
            });
        loginModalRef.componentInstance.title = '登录';
        loginModalRef.componentInstance.message = '';
        loginModalRef.componentInstance.toLogin.subscribe(response => {
            console.log(response);
            this.loginSubscription = this.hospitalService.login(response, 'login').subscribe(
                result => {
                    console.log(result);
                    if (result.code === 0) {
                        this.container.setUserID(result.msg.uid);
                        // 关闭对话框
                        loginModalRef.componentInstance.activeModal.close('Login success');
                    } else {
                        // 弹出气泡提示
                        loginModalRef.componentInstance.message = '账号或者密码错误！';
                    }
                }
            );
        });
    }

    /**
     * 显示注册对话框
     */
    showRegisterModal() {
        const registerModalRef = this.modalService.open(RegisterModalComponent);
        registerModalRef.result
            .then(
                (result) => {
                    console.log(result);
                    if (result === 'Register success') {
                        // TODO: 注册成功后保存用户信息并更新页面
                    }
                },
                (reason) => {
                    console.log(reason);
                });
        registerModalRef.componentInstance.title = '注册新账号';
        registerModalRef.componentInstance.message = '';
        registerModalRef.componentInstance.toRegister.subscribe(response => {
            console.log(response);
            this.registerSubscription = this.hospitalService.login(response, 'register').subscribe(
                result => {
                    console.log(result);
                    if (result.code === 0) {
                        // 关闭对话框
                        registerModalRef.componentInstance.activeModal.close('Register success');
                    }
                    else if (result.msg.errno === 1062) {
                        // 弹出气泡提示
                        registerModalRef.componentInstance.message = '该手机号已被注册！';
                    }
                    else {
                        // 弹出气泡提示
                        registerModalRef.componentInstance.message = result.msg;
                    }
                }
            );
        });
    }

    /**
     * 跳转至个人中心
     */
    toUserProfile() {
        const uid = this.container.getUserID();
        this.router.navigate(['/my/profile/' + uid]).then();
    }
}
