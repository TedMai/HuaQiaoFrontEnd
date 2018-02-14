import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {UrlService} from '../../service/url.service';
import {ContainerService} from '../../service/container.service';
import {Doctor} from '../../service/hospital.structure';

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
    private name: string;
    doctors: Doctor[];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private container: ContainerService) {
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { relativeDoctorsResolver: any }) => {
                const tmpArray = JSON.parse(data.relativeDoctorsResolver.doctors);
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
                            });
                        }
                    }
                }
            });
    }

    showDoctorDetails(doctor: Doctor) {
        this.container.set({
            departmentName: this.name,
            doctor: doctor
        });
        this.router.navigate(['/details/doctor', {id: doctor.id}]).then();
    }
}
