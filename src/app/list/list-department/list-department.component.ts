import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HospitalService} from '../../service/hosptial.service';
import {Department} from '../../service/hospital.structure';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-list-department',
    templateUrl: './list-department.component.html',
    styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit, OnDestroy {
    departments: Department[];
    parent: Department[];
    children: Department[];
    isCollapsed: boolean;
    focusSuperior: number;
    subscription: Subscription;

    constructor(private router: Router,
                private hospitalService: HospitalService) {

    }

    ngOnInit() {
        this.isCollapsed = false;
        this.focusSuperior = 0;
        this.subscription = this.hospitalService.fetchDepartmentList()
            .subscribe(departments => {
                this.departments = departments;
                this.parent = this.departments.filter(function (department) {
                    return department.parent === 0;
                });
                if (this.parent.length > 0) {
                    const id = this.parent[0].did;      // 默认显示第一个父科室下的所有子科室
                    this.focusSuperior = id;
                    this.children = this.departments.filter(function (department) {
                        return department.parent === id;
                    });
                }
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    showSubordinateDepartment(id: number) {
        this.focusSuperior = id;
        this.children = this.departments.filter(function (department) {
            return department.parent === id;
        });
    }

    showDoctorList(id: number, name: string) {
        this.router.navigate(['/search/result', id, name]).then();
    }

}
