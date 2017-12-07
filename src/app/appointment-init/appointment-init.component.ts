import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContainerService} from '../service/container.service';
import {Schedule} from '../service/schedule';

@Component({
    selector: 'app-appointment-init',
    templateUrl: './appointment-init.component.html',
    styleUrls: ['./appointment-init.component.css']
})
export class AppointmentInitComponent implements OnInit {
    schedule: Schedule;
    departmentName: string;
    doctorName: string;

    constructor(private router: Router,
                private container: ContainerService) {
    }

    ngOnInit() {
        this.departmentName = this.container.get().departmentName;
        this.doctorName = this.container.get().doctorName;
        this.schedule = this.container.get().schedule;
    }

    onSubmitAppointment(): void {
        this.router.navigate(['/appointment/check']).then();
    }
}
