import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppointmentCheckComponent} from './appointment-check.component';
import {VerificationCodeSampleComponent} from '../../widget/verification-code-sample/verification-code-sample.component';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ContainerService} from '../../service/container.service';
import {RouterStub} from '../../service/mock/router.stub';
import {Router} from '@angular/router';
import {HospitalServiceMock} from '../../service/mock/hospital.service.mock';
import {HospitalService} from '../../service/hosptial.service';
import {NgbModalStub} from '../../service/mock/modal.stub';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

describe('AppointmentCheckComponent', () => {
    let component: AppointmentCheckComponent;
    let fixture: ComponentFixture<AppointmentCheckComponent>;
    let containerService: ContainerService;

    beforeEach(() => {
        containerService = new ContainerService();
        containerService.set({
            patient: {pid: 1, phone: ''},
            schedule: {id: 1}
        });
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                VerificationCodeSampleComponent,
                AppointmentCheckComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: ContainerService, useValue: containerService},
                {provide: HospitalService, useClass: HospitalServiceMock},
                {provide: NgbModal, useClass: NgbModalStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppointmentCheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
