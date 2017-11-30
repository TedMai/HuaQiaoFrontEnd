import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-appointment-init',
    templateUrl: './appointment-init.component.html',
    styleUrls: ['./appointment-init.component.css']
})
export class AppointmentInitComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onSubmitAppointment(): void {
        this.router.navigate(['/appointment/check']).then();
    }
}
