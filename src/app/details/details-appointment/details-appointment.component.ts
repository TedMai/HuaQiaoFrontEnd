import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContainerService} from '../../service/container.service';
import {Schedule} from '../../service/schedule';
import {Patient} from '../../service/patient';

@Component({
    selector: 'app-details-appointment',
    templateUrl: './details-appointment.component.html',
    styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit {
    schedule: Schedule;
    patient: Patient;
    departmentName: string;
    doctorName: string;
    appointmentId: string;
    appointmentDatetime: string;

    constructor(private router: Router,
                private container: ContainerService) {
        this.departmentName = '';
        this.doctorName = '';
        this.schedule = new Schedule(0, 0, 0, 0, 0, 0, '', 0);
        this.patient = new Patient(0, '', 0, '', '', '', '', '', 0);
        this.appointmentId = '';
        this.appointmentDatetime = '';
    }

    ngOnInit() {
        console.log(this.container.get());
        this.departmentName = this.container.get().departmentName;
        this.doctorName = this.container.get().doctorName;
        this.schedule = this.container.get().schedule;
        this.patient = this.container.get().patient;
        this.appointmentId = this.container.get().rid;
        this.appointmentDatetime = this.container.get().appointment;
    }

    backToOrigin(): void {
        this.router.navigate(['/']).then();
    }
}
