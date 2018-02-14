import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Department} from '../../service/hospital.structure';

@Component({
    selector: 'app-list-department',
    templateUrl: './list-department.component.html',
    styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
    departments: Department[];
    parent: Department[];
    children: Department[];
    isCollapsed: boolean;
    focusSuperior: number;

    constructor(private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        this.isCollapsed = false;
        this.focusSuperior = 0;
        this.route.data
            .subscribe((data: { departmentListResolver: any }) => {
                this.departments = data.departmentListResolver;
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

    showSubordinateDepartment(id: number) {
        this.focusSuperior = id;
        this.children = this.departments.filter(function (department) {
            return department.parent === id;
        });
    }

    showDoctorList(id: number, name: string) {
        this.router.navigate(['/search/result', {id: id, name: name}]).then();
    }

}
