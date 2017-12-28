import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UrlService} from '../service/url.service';
import {HospitalService} from '../service/hosptial.service';
import {ContainerService} from '../service/container.service';

import {Doctor} from '../service/doctor';

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit, OnDestroy {
    private sub: any;
    private id: number;
    private name: string;
    doctors: Doctor[];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private hospitalService: HospitalService,
                private container: ContainerService) {
    }

    ngOnInit() {
        /**
         * 获取传入参数
         * @type {Subscription}
         */
        this.sub = this.activatedRoute.params.subscribe(params => {
            // 根据科室的ID查找其下的医生
            this.id = params['id'];
            this.name = params['name'];
            this.hospitalService.queryRelativeDoctors(this.id)
                .subscribe(response => {
                        const tmpArray = JSON.parse(response.doctors);
                        // 去重
                        // 只取第一张图片 作为医生头像
                        if (tmpArray.length > 0) {
                            let count = 0;
                            this.doctors = [];
                            for (let i = 0, length = tmpArray.length; i < length; i++) {
                                count = this.doctors.length;
                                if (count < 1 || tmpArray[i].id !== this.doctors[count - 1].id) {
                                    this.doctors.push({
                                        id: tmpArray[i].id,
                                        name: tmpArray[i].name,
                                        title: tmpArray[i].title,
                                        position: tmpArray[i].position,
                                        resume: tmpArray[i].resume,
                                        field: tmpArray[i].field,
                                        department: tmpArray[i].department,
                                        subordinate: tmpArray[i].subordinate,
                                        imageurl: UrlService.FetchImage(tmpArray[i].imageurl)
                                        // imageurl: 'backbone/image/screenshot/' + tmpArray[i].imageurl,
                                    });
                                }
                            }
                            /* end of for */
                        }
                    }
                );
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    showDoctorDetails(doctor: Doctor) {
        this.container.set({
            departmentName: this.name,
            doctor: doctor
        });
        this.router.navigate(['/details/doctor', doctor.id]).then();
    }
}
