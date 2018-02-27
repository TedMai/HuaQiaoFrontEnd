import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginModalComponent} from './login-modal.component';
import {NgbActiveModalStub} from '../../service/mock/modal.stub';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

describe('LoginModalComponent', () => {
    let component: LoginModalComponent;
    let fixture: ComponentFixture<LoginModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [LoginModalComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: NgbActiveModal, useClass: NgbActiveModalStub}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
