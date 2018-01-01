import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {Department} from '../../service/department';
import {HospitalService} from '../../service/hosptial.service';

@Component({
    selector: 'app-search-init',
    templateUrl: './search-init.component.html',
    styleUrls: ['./search-init.component.css']
})
export class SearchInitComponent implements OnInit {
    // Notice the declaration of heroes$ as an Observable
    departments$: Observable<Department[]>;
    // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
    // You can also push values into that Observable by calling its next(value) method as the search() method does.
    private searchTerms = new Subject<string>();

    constructor(private hospitalService: HospitalService) {
    }

    ngOnInit() {
        this.departments$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.hospitalService.searchDepartments(term)),
        );
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

}
