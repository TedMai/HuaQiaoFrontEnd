import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-doctor.component.html',
    styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onSelected(id: number) {
        this.router.navigate(['/details/doctor'], {queryParams: {id: id}}).then();
    }
}
