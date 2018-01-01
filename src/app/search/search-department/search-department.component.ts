import {Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-search-department',
    templateUrl: './search-department.component.html',
    styleUrls: ['./search-department.component.css']
})
export class SearchDepartmentComponent {

    constructor(private router: Router) {
    }

    toMainPage(): void {
        this.router.navigate(['/']).then();
    }

    toSearchPage(): void {
        this.router.navigate(['/search/init']).then();
    }
}
