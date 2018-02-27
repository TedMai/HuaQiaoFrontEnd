import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsAppointmentComponent} from './details-appointment.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub, RouterStub} from '../../service/mock/router.stub';

describe('DetailsAppointmentComponent', () => {
    let component: DetailsAppointmentComponent;
    let fixture: ComponentFixture<DetailsAppointmentComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsAppointmentComponent],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: Router, useClass: RouterStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsAppointmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
