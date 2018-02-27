import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListAppointmentComponent} from './list-appointment.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub, RouterStub} from '../../service/mock/router.stub';

describe('ListAppointmentComponent', () => {
    let component: ListAppointmentComponent;
    let fixture: ComponentFixture<ListAppointmentComponent>;
    let activatedRoute: ActivatedRouteStub;
    let spy: jasmine.Spy;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListAppointmentComponent],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: Router, useClass: RouterStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
