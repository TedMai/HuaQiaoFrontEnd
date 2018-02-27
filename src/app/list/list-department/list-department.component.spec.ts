import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListDepartmentComponent} from './list-department.component';
import {ActivatedRouteStub, RouterStub} from '../../service/mock/router.stub';
import {ActivatedRoute, Router} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ListDepartmentComponent', () => {
    let component: ListDepartmentComponent;
    let fixture: ComponentFixture<ListDepartmentComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListDepartmentComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: Router, useValue: RouterStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListDepartmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
