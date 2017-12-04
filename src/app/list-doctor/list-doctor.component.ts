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
                .subscribe(response => {
                        console.log(response);
                        if (response.code === 0) {
                            const tmpArray = JSON.parse(response.msg.doctors);
                            console.log(tmpArray);
                            // 去重
                            if (tmpArray.length > 0) {
                                let count = 0;
                                this.doctors = [];
                                for (let i = 0, length = tmpArray.length; i < length; i++) {
                                    count = this.doctors.length;
                                    if (count < 1 || tmpArray[i].id !== this.doctors[count - 1].id) {
                                        this.doctors.push({
                                            id: tmpArray[i].id,
                                            name: tmpArray[i].name,
                                            title: '',
                                            position: '',
                                            resume: '',
                                            field: '',
                                            imageurl: 'image/screenshot/' + tmpArray[i].imageurl,
                                            department: 46
                                        });
                                    }
                                }
                                /* end of for */
                            }
                            console.log(this.doctors);
                        }
                    }
                );
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onSelected(id: number) {
        this.router.navigate(['/details/doctor'], {queryParams: {id: id}}).then();
    }
}
