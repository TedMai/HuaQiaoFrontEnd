import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ContainerService} from '../../service/container.service';
import {Doctor} from '../../service/hospital.structure';
import {Schedule} from '../../service/hospital.structure';
import {DatetimeService} from '../../service/datetime.service';

@Component({
    selector: 'app-details-doctor',
    templateUrl: './details-doctor.component.html',
    styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {
    departmentName: string;
    doctor: Doctor;
    schedules: Schedule[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private container: ContainerService) {
    }

    ngOnInit() {
        this.departmentName = this.container.get().departmentName;
        this.doctor = this.container.get().doctor;
        this.route.data
            .subscribe((data: { relativeSchedulesResolver: any }) => {
                this.schedules = data.relativeSchedulesResolver.map(item => {
                    item.visiting = DatetimeService.FormatDate(new Date(item.visiting));
                    return item;
                });
            });
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
