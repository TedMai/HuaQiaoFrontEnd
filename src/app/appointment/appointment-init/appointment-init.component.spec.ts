import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppointmentInitComponent} from './appointment-init.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {RouterStub} from '../../service/mock/router.stub';
import {HospitalService} from '../../service/hosptial.service';
import {HospitalServiceMock} from '../../service/mock/hospital.service.mock';
import {ContainerService} from '../../service/container.service';
import {ContianerServiceMock} from '../../service/mock/container.service.mock';

describe('AppointmentInitComponent', () => {
    let component: AppointmentInitComponent;
    let fixture: ComponentFixture<AppointmentInitComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppointmentInitComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: Router, useClass: RouterStub},
                // {provide: NgbModal, useClass: NgbModalStub},
                {provide: HospitalService, useClass: HospitalServiceMock},
                {provide: ContainerService, useClass: ContianerServiceMock},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentInitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
