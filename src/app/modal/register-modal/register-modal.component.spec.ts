import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterModalComponent} from './register-modal.component';
import {NgbActiveModalStub} from '../../service/mock/modal.stub';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';

describe('RegisterModalComponent', () => {
    let component: RegisterModalComponent;
    let fixture: ComponentFixture<RegisterModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [RegisterModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: NgbActiveModal, useClass: NgbActiveModalStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
