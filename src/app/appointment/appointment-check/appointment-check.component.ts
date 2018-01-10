import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';
import {Appointment} from '../../service/appointment';
import {Message} from '../../service/message';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit, OnDestroy {
    scheduleId = 0;
    patientId = 0;
    requestId = '';
    bizId = '';
    phone = '';
    verificationCode = '';
    message = '';
    appointmentSubscription: Subscription;

    constructor(private router: Router,
                private container: ContainerService,
                private hospitalService: HospitalService) {
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

    onSentCompleted(response: Message): void {
        if (response.Code !== 'OK') {
            this.message = response.Message;
        } else {
            this.requestId = response.RequestId;
            this.bizId = response.BizId;
        }
    }

    /**
     * 验证信息无误后
     *  --  1. 生成预约挂号单
     *  --  2. 跳转至挂号单详情页
     */
    onConfirm(): void {
        // TODO: 校验验证码是否正确
        this.appointmentSubscription = this.hospitalService
            .makeAppointment(new Appointment(
                '',
                this.scheduleId,
                this.patientId,
                '',
                this.requestId,
                this.bizId,
                this.phone,
                this.verificationCode))
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
                    this.container.append('appointment', response.msg.appointment);
                    this.container.append('rid', response.msg.insertId);
                    this.router.navigate(['/details/appointment']).then();
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
}
