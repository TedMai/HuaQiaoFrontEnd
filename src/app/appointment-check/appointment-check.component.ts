import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HospitalService} from '../service/hosptial.service';
import {ContainerService} from '../service/container.service';
import {Appointment} from '../service/appointment';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit {
    scheduleId: number;
    patientId: number;
    phone: string;
    isDisabled: boolean;

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

    /**
     * 验证信息无误后
     *  --  1. 生成预约挂号单
     *  --  2. 跳转至挂号单详情页
     */
    onConfirm(): void {
        this.hospitalService
            .makeAppointment(new Appointment('', this.scheduleId, this.patientId, ''))
            .subscribe(response => {
                console.log(response);
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
            this.hospitalService.sendVerificationCode(this.phone)
                .subscribe(response => {
                    console.log(response);
                });
        }
    }
}
