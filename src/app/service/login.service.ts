import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {LoginModalComponent} from '../modal/login-modal/login-modal.component';
import {RegisterModalComponent} from '../modal/register-modal/register-modal.component';
import {ContainerService} from './container.service';
import {HospitalService} from './hosptial.service';

@Injectable()
export class LoginService {

    constructor(private modalService: NgbModal,
                private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    /**
     * 显示登录对话框
     */
    public openLoginModal() {
        const loginModalRef = this.modalService.open(LoginModalComponent);
        loginModalRef.componentInstance.title = '登录';
        loginModalRef.componentInstance.message = '';
        loginModalRef.componentInstance.toLogin.subscribe(response => {
            console.log(response);
            this.hospitalService.login(response, 'login').subscribe(
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

        loginModalRef.result.then(
            /**
             * close
             * @param reason
             */
            (reason) => {
                switch (reason) {
                    case 'Login success':
                        break;
                    default:
                        break;
                }
            },
            /**
             * dismiss
             * @param reason
             */
            (reason) => {
                switch (reason) {
                    case 'Register':
                        this.openRegisterModal();
                        break;
                    default:
                        break;
                }
            });
    }

    /**
     * 显示注册对话框
     */
    private openRegisterModal() {
        const registerModalRef = this.modalService.open(RegisterModalComponent);
        registerModalRef.componentInstance.title = '注册新账号';
        registerModalRef.componentInstance.message = '';
        registerModalRef.componentInstance.toRegister.subscribe(response => {
            console.log(response);
            this.hospitalService.login(response, 'register').subscribe(
                result => {
                    console.log(result);
                    if (result.code === 0) {
                        this.container.setUserID(result.msg.insertId);
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

        registerModalRef.result.then(
            /**
             * close
             * @param reason
             */
            (reason) => {
                switch (reason) {
                    case 'Register success':
                        break;
                    default:
                        break;
                }
            },
            /**
             * dismiss
             * @param reason
             */
            (reason) => {
                console.log(reason);
            });
    }
}