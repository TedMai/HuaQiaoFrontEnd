import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmModalComponent} from './confirm-modal.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NgbActiveModalStub} from '../../service/mock/modal.stub';

describe('ConfirmModalComponent', () => {
    let component: ConfirmModalComponent;
    let fixture: ComponentFixture<ConfirmModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: NgbActiveModal, useClass: NgbActiveModalStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
