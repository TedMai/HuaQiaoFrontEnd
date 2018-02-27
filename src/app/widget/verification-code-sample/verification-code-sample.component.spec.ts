import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import {VerificationCodeSampleComponent} from './verification-code-sample.component';
import {ContainerService} from '../../service/container.service';
import {HospitalService} from '../../service/hosptial.service';
import {HospitalServiceMock} from '../../service/mock/hospital.service.mock';
import {click} from '../../service/mock/helper';
import {of} from 'rxjs/observable/of';

describe('VerificationCodeSampleComponent', () => {
    let component: VerificationCodeSampleComponent;
    let fixture: ComponentFixture<VerificationCodeSampleComponent>;
    let containerService: ContainerService;
    let fakeHospitalService: any;
    let page: Page;

    class Page {
        sendBtn: DebugElement;
        /* 添加页面元素 */
        AddPageElements() {
            const buttons = fixture.debugElement.queryAll(By.css('button'));
            this.sendBtn = buttons[0];
        }
    }

    beforeEach(() => {
        containerService = new ContainerService();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [VerificationCodeSampleComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: ContainerService, useValue: containerService},
                {provide: HospitalService, useClass: HospitalServiceMock}
                // HospitalService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VerificationCodeSampleComponent);
        component = fixture.componentInstance;
        page = new Page();
        page.AddPageElements();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('输入格式不正确的手机号码', () => {
        component.phone = '111';
        fixture.detectChanges();
        click(page.sendBtn);

        expect(component.hasSent).toBeFalsy('未触发发送验证码');
        expect(component.message).toContain('请输入正确的手机号码', '给出错误提示');
    });

    it('成功发送验证码', () => {
        component.phone = '18159393355';
        fixture.detectChanges();
        click(page.sendBtn);

        fakeHospitalService = fixture.debugElement.injector.get(HospitalService) as any;
        // Make the spy return a synchronous Observable with the test data
        expect(fakeHospitalService.sendVerificationCode.calls.count()).toBe(1, '#sendVerificationCode() called once.');
    });
});

