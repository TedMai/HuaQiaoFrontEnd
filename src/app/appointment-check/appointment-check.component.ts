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

    onConfirm(): void {
        this.hospitalService
            .makeAppointment(new Appointment('', this.scheduleId, this.patientId, ''))
            .subscribe(response => {
                console.log(response);
                this.router.navigate(['/details/appointment']).then();
            });
    }

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
