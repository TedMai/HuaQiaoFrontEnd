import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchResultComponent} from './search-result.component';
import {ListDoctorComponent} from '../../list/list-doctor/list-doctor.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('SearchResultComponent', () => {
    let component: SearchResultComponent;
    let fixture: ComponentFixture<SearchResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListDoctorComponent, SearchResultComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
