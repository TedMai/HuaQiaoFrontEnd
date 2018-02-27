import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VerificationCodeComponent} from './verification-code.component';
import {HospitalServiceMock} from '../../service/mock/hospital.service.mock';
import {HospitalService} from '../../service/hosptial.service';

describe('VerificationCodeComponent', () => {
    let component: VerificationCodeComponent;
    let fixture: ComponentFixture<VerificationCodeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerificationCodeComponent],
            providers: [
                {provide: HospitalService, useClass: HospitalServiceMock}
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
