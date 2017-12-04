import {Component, OnInit} from '@angular/core';
import {HospitalService} from '../service/hosptial.service';
import {Department} from '../service/department';

@Component({
    selector: 'app-list-department',
    templateUrl: './list-department.component.html',
    styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

    departments: Department[];
    parent: Department[];
    children: Department[];

    constructor(private hospitalService: HospitalService) {

    }

    ngOnInit() {
        this.hospitalService.fetchDepartmentList()
            .subscribe(departments => {
                this.departments = departments;
                this.parent = this.departments.filter(function (department) {
                    return department.parent === 0;
                });
                if (this.parent.length > 0) {
                    const id = this.parent[0].did;      // 默认显示第一个父科室下的所有子科室
                    this.children = this.departments.filter(function (department) {
                        return department.parent === id;
                    });
                }
            });
    }

    showMyChildren(id: number) {
        this.children = this.departments.filter(function (department) {
            return department.parent === id;
        });
        // this.hospitalService.querySpecificDepartment(id)
        //     .subscribe(department => console.log(department));
    }

}
