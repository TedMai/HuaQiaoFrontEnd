import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HospitalService} from '../service/hosptial.service';
import {ContainerService} from '../service/container.service';
import {Doctor} from '../service/doctor';

@Component({
    selector: 'app-details-doctor',
    templateUrl: './details-doctor.component.html',
    styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {
    private doctor: Doctor;

    constructor(private router: Router,
                private hospitalService: HospitalService,
                private container: ContainerService) {
    }

    ngOnInit() {
        console.log('details-doctor.component.ts ==> ngOnInit()');
        this.doctor = this.container.get();
        console.log(this.doctor);
    }

    makeAppointment() {
        this.router.navigate(['/appointment/init']).then();
    }
}
