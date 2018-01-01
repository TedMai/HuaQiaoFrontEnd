import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';
import {Appointment} from '../../service/appointment';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit, OnDestroy {
    scheduleId: number;
    patientId: number;
    phone: string;
    isDisabled: boolean;
    appointmentSubscription: Subscription;
    sendMessageSubscription: Subscription;

    constructor(private router: Router,
                private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
        this.isDisabled = false;
        this.patientId = this.container.get().patient.pid;
        this.phone = this.container.get().patient.phone;
        this.scheduleId = this.container.get().schedule.id;
    }

    ngOnDestroy() {
        if (typeof this.appointmentSubscription !== 'undefined') {
            this.appointmentSubscription.unsubscribe();
        }
        if (typeof this.sendMessageSubscription !== 'undefined') {
            this.sendMessageSubscription.unsubscribe();
        }
    }

    /**
     * 验证信息无误后
     *  --  1. 生成预约挂号单
     *  --  2. 跳转至挂号单详情页
     */
    onConfirm(): void {
        this.appointmentSubscription = this.hospitalService
            .makeAppointment(new Appointment('', this.scheduleId, this.patientId, ''))
            .subscribe(response => {
                console.log(response);
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
                if (0 === response.code) {
                    this.container.append('appointment', response.msg.appointment);
                    this.container.append('rid', response.msg.insertId);
                }
                this.router.navigate(['/details/appointment']).then();
            });
    }

    /**
     * 发送验证码
     *  --  收到服务器发送成功的通知后，修改按键状态，开始倒计时
     */
    sendVerificationCode(): void {
        if (typeof this.phone !== 'undefined' && this.phone !== '') {
            this.isDisabled = true;
            this.sendMessageSubscription = this.hospitalService.sendVerificationCode(this.phone)
                .subscribe(result => {
                    console.log(result);
                });
        }
    }
}
