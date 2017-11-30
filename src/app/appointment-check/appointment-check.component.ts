import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onConfirm(): void {
        this.router.navigate(['/details/appointment']).then();
    }
}
