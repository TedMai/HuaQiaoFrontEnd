import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HospitalService} from '../service/hosptial.service';

@Component({
    selector: 'app-search-department',
    templateUrl: './search-department.component.html',
    styleUrls: ['./search-department.component.css']
})
export class SearchDepartmentComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {

    }

    onSelected(id: number): void {
        this.router.navigate(['/search/result'], {queryParams: {id: id}}).then();
    }
}