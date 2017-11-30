import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-details-appointment',
    templateUrl: './details-appointment.component.html',
    styleUrls: ['./details-appointment.component.css']
})
export class DetailsAppointmentComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    backToOrigin(): void {
        this.router.navigate(['/']).then();
    }
}
