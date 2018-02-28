import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VerificationCodeComponent} from './verification-code.component';
import {HospitalServiceSpy} from '../../service/mock/hospital.service.spy';
import {HospitalService} from '../../service/hospital.service';

describe('VerificationCodeComponent', () => {
    let component: VerificationCodeComponent;
    let fixture: ComponentFixture<VerificationCodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerificationCodeComponent],
            providers: [
                {provide: HospitalService, useClass: HospitalServiceSpy}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VerificationCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
