import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from '../../service/hospital.service';
import {ContainerService} from '../../service/container.service';
import {Appointment} from '../../service/hospital.structure';
import {Verification} from '../../service/verification';
import {Observable} from 'rxjs/Observable';
import {ConfirmModalComponent} from '../../modal/confirm-modal/confirm-modal.component';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit, OnDestroy {
    phone = '';
    message = '';
    scheduleId = 0;
    patientId = 0;
    isCompleted = false;
    appointmentSubscription: Subscription;

    constructor(private router: Router,
                private container: ContainerService,
                private hospitalService: HospitalService,
                private modalService: NgbModal) {
    }

    ngOnInit() {
        this.patientId = this.container.get().patient.pid;
        this.phone = this.container.get().patient.phone;
        this.scheduleId = this.container.get().schedule.id;
    }

    ngOnDestroy() {
        if (typeof this.appointmentSubscription !== 'undefined') {
            this.appointmentSubscription.unsubscribe();
        }
    }

    /**
     * 验证信息无误后
     *  --  1. 生成预约挂号单
     *  --  2. 跳转至挂号单详情页
     */
    onConfirm(request: Verification): void {
        this.appointmentSubscription = this.hospitalService
            .makeAppointment(new Appointment(
                '',
                this.scheduleId,
                this.patientId,
                '',
                request.requestId,
                request.bizId,
                this.phone,
                request.verificationCode))
            .subscribe(response => {
                console.log(response);
                if (response.code === 0) {
                    // 发送确认短信
                    if (typeof this.phone !== 'undefined' && this.phone !== '') {
                        this.hospitalService
                            .sendConfirmMessage(this.phone)
                            .subscribe(result => {
                                console.log(result);
                            });
                    }
                    // 装入额外信息 下单时间及挂号单ID
                    // 跳转至订单详情页
                    this.isCompleted = true;
                    // this.container.append('rid', response.msg.insertId);
                    this.router.navigate(['/details/appointment', {rid: response.msg.insertId}]).then();
                } else if (response.code === -500) {
                    // 提示重复提交的错误
                    this.message = '您已成功预约，进入个人中心查看详情。';
                } else if (response.code === -300) {
                    this.message = '验证码输入有误！';
                } else {
                    // 提示出现未知错误
                    this.message = '出现未知错误！';
                }
            });
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        const that = this;

        // 如果已经验证成功，则直接进入下一步
        if (this.isCompleted) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // promise which resolves to true or false when the user decides
        let promise1 = new Promise<boolean>(function (resolve, reject) {
            const confirmModalRef = that.modalService.open(ConfirmModalComponent);
            confirmModalRef.componentInstance.title = '您正要离开';
            confirmModalRef.componentInstance.content = '请确认是否不再预约?';
            confirmModalRef.componentInstance.btnConfirmText = '放弃';

            confirmModalRef.result.then(
                /**
                 * close
                 * @param result
                 */
                (result) => {
                    switch (result) {
                        case 'Yes':
                            resolve(true);
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
                        case 'Cancel':
                            break;
                        default:
                            break;
                    }
                    resolve(false);
                });
        });
        return promise1;
    }
}
