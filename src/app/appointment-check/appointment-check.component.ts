import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HospitalService} from '../service/hosptial.service';

@Component({
    selector: 'app-appointment-check',
    templateUrl: './appointment-check.component.html',
    styleUrls: ['./appointment-check.component.css']
})
export class AppointmentCheckComponent implements OnInit {

    constructor(private router: Router,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
    }

    onConfirm(): void {
        this.router.navigate(['/details/appointment']).then();
    }

    sendVerificationCode(): void {
        this.hospitalService.sendVerificationCode('18159393355')
            .subscribe(response => {
                console.info(response);
            });
    }
}
