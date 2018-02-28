import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {MyMobileComponent} from './my-mobile.component';
import {ActivatedRouteStub} from '../../service/mock/router.stub';
import {HospitalService} from '../../service/hospital.service';
import {HospitalServiceSpy} from '../../service/mock/hospital.service.spy';
import {VerificationCodeSampleComponent} from '../../widget/verification-code-sample/verification-code-sample.component';
import {ContainerService} from '../../service/container.service';

describe('MyMobileComponent', () => {
    let component: MyMobileComponent;
    let fixture: ComponentFixture<MyMobileComponent>;
    let activatedRoute: ActivatedRouteStub;
    let containerService: ContainerService;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
        containerService = new ContainerService();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [
                VerificationCodeSampleComponent,
                MyMobileComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: HospitalService, useClass: HospitalServiceSpy},
                {provide: ContainerService, useValue: containerService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        let de = fixture.debugElement.query(By.css('div'));
        let el = de.nativeElement;
        expect(el.textContent).toContain('您已关联手机号', '初始值设置为手机号码已绑定');
    });

    it('未绑定手机号码', () => {
        component.isBind = false;
        fixture.detectChanges();
        let de = fixture.debugElement.query(By.css('app-verification-code-sample'));
        expect(de).toBeTruthy('未绑定手机时，应显示控件app-verification-code-sample');
    });
});
