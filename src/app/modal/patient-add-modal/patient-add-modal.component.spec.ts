import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientAddModalComponent} from './patient-add-modal.component';
import {ContainerService} from '../../service/container.service';
import {NgbActiveModalStub} from '../../service/mock/modal.stub';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PatientAddModalComponent', () => {
    let component: PatientAddModalComponent;
    let fixture: ComponentFixture<PatientAddModalComponent>;
    let containerService: ContainerService;

    beforeEach(() => {
        containerService = new ContainerService;
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [PatientAddModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: NgbActiveModal, useClass: NgbActiveModalStub},
                {provide: ContainerService, useValue: containerService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientAddModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
