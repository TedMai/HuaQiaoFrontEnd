import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppointmentInitComponent} from './appointment-init.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {RouterStub} from '../../service/mock/router.stub';
import {HospitalService} from '../../service/hospital.service';
import {HospitalServiceSpy} from '../../service/mock/hospital.service.spy';
import {ContainerService} from '../../service/container.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStub} from '../../service/mock/modal.stub';

describe('AppointmentInitComponent', () => {
    let component: AppointmentInitComponent;
    let fixture: ComponentFixture<AppointmentInitComponent>;
    let containerService: ContainerService;

    beforeEach(() => {
        containerService = new ContainerService();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppointmentInitComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: NgbModal, useClass: NgbModalStub},
                {provide: HospitalService, useClass: HospitalServiceSpy},
                {provide: ContainerService, useValue: containerService},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentInitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
