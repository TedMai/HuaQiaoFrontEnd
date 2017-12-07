import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HospitalService} from '../service/hosptial.service';
import {ContainerService} from '../service/container.service';

import {Doctor} from '../service/doctor';
import {Schedule} from '../service/schedule';

@Component({
    selector: 'app-details-doctor',
    templateUrl: './details-doctor.component.html',
    styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {
    private doctor: Doctor;
    private schedules: Schedule[];

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService) {
    }

    ngOnInit() {
        console.log('details-doctor.component.ts ==> ngOnInit()');
        this.doctor = this.container.get();
        console.log(this.doctor);
        this.hospitalService.queryRelativeSchedules(this.doctor.id)
            .subscribe(response => {
                console.info(response);
                this.schedules = response;
            });
    }

    makeAppointment(schedule: Schedule) {
        this.router.navigate(['/appointment/init', schedule.id]).then();
    }
}
