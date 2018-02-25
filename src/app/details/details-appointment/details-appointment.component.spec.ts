import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsAppointmentComponent} from './details-appointment.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterStub} from '../../service/mock/router.stub';

describe('DetailsAppointmentComponent', () => {
    let component: DetailsAppointmentComponent;
    let fixture: ComponentFixture<DetailsAppointmentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsAppointmentComponent],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: ActivatedRoute}
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
