import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientSelectModalComponent} from './patient-select-modal.component';
import {NgbActiveModalStub} from '../../service/mock/modal.stub';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PatientSelectModalComponent', () => {
    let component: PatientSelectModalComponent;
    let fixture: ComponentFixture<PatientSelectModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PatientSelectModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: NgbActiveModal, useClass: NgbActiveModalStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PatientSelectModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
