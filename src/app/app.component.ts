import {Component, OnDestroy} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from './service/hosptial.service';

import {LoginModalComponent} from './modal/login-modal/login-modal.component';
import {RegisterModalComponent} from './modal/register-modal/register-modal.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    registerSubscription: Subscription;
    loginSubscription: Subscription;
    isLoggedIn: boolean;
    headImageUrl: string;

    constructor(private modalService: NgbModal,
                private hospitalService: HospitalService) {
        this.isLoggedIn = false;
        this.headImageUrl = '../assets/icons/login/head-image.png';
    }

    ngOnDestroy() {
        if (typeof this.registerSubscription !== 'undefined') {
            this.registerSubscription.unsubscribe();
        }
        if (typeof this.loginSubscription !== 'undefined') {
            this.loginSubscription.unsubscribe();
        }
    }

    showLoginModal() {
        const loginModalRef = this.modalService.open(LoginModalComponent);
        loginModalRef.result.then(
            (reason) => {
                console.log(reason);
                switch (reason) {
                    case 'Login success':
                        // 1. 弹出登录成功的气泡提示
                        // 2. 存入session storage
                        // 3. 更新页面 个人主页链接
                        this.isLoggedIn = true;
                        break;
                    default:
                        break;
                }
            },
            (reason) => {
                console.log(reason);
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

    showRegisterModal() {
        const registerModalRef = this.modalService.open(RegisterModalComponent);
        registerModalRef.result
            .then(
                (result) => {
                    console.log(result);
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
                        registerModalRef.componentInstance.message = '注册失败';
                    }
                }
            );
        });
    }
}
