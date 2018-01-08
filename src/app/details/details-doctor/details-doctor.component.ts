import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';
import {LoginService} from '../../service/login.service';

import {Doctor} from '../../service/doctor';
import {Schedule} from '../../service/schedule';

@Component({
    selector: 'app-details-doctor',
    templateUrl: './details-doctor.component.html',
    styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit, OnDestroy {
    departmentName: string;
    doctor: Doctor;
    schedules: Schedule[];
    subscription: Subscription;

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.departmentName = this.container.get().departmentName;
        this.doctor = this.container.get().doctor;
        console.log(this.doctor);
        this.subscription = this.hospitalService.queryRelativeSchedules(this.doctor.id)
            .subscribe(response => {
                this.schedules = response;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    makeAppointment(schedule: Schedule) {
        const uid = this.container.getUserID();
        if (typeof uid === 'undefined' || uid === null) {
            this.loginService.openLoginModal();             // 弹出登录对话框
        } else {
            this.container.set({
                departmentName: this.departmentName,
                doctorName: this.doctor.name,
                schedule: schedule
            });
            this.router.navigate(['/appointment/init', schedule.id]).then();
        }
    }
}
