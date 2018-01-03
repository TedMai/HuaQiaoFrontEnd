import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';

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
                private container: ContainerService) {
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
        this.container.set({
            departmentName: this.departmentName,
            doctorName: this.doctor.name,
            schedule: schedule
        });
        this.router.navigate(['/appointment/init', schedule.id]).then();
    }
}