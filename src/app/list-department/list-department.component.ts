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

    constructor(private hospitalService: HospitalService) {

    }

    ngOnInit() {
        this.hospitalService.fetchDepartmentList()
            .subscribe(departments => this.departments = departments);
    }

    onClick(id: number) {
        this.hospitalService.querySpecificDepartment(id)
            .subscribe(department => console.log(department));
    }

}
