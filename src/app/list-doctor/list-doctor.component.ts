import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {HospitalService} from '../service/hosptial.service';

import {Doctor} from '../service/doctor';

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit, OnDestroy {
    private sub: any;
    private id: number;
    doctors: Doctor[];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            console.log('list-doctor.component.ts ==> ngOnInit()');
            this.id = params['id'];
            this.hospitalService.querySpecificDepartment(this.id)
                .subscribe(department => console.log(department));
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onSelected(id: number) {
        this.router.navigate(['/details/doctor'], {queryParams: {id: id}}).then();
    }
}
