import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {Router} from '@angular/router';
import {LoginService} from './service/login.service';
import {HospitalService} from './service/hosptial.service';

import {RouterStub} from './service/mock/router.stub';
import {LoginServiceMock} from './service/mock/login.service.mock';
import {HospitalServiceMock} from './service/mock/hospital.service.mock';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: LoginService, useClass: LoginServiceMock},
                {provide: HospitalService, useClass: HospitalServiceMock}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    const suites = [
        {description: '未登录时应显示登录按键', isLoggedIn: false, element: 'button'},
        {description: '登录成功后应显示用户头像', isLoggedIn: true, element: 'img'}
    ];
    suites.forEach((suite) => {
        it(suite.description, () => {
            const loginSevice = fixture.debugElement.injector.get(LoginService);
            loginSevice.isLoggedIn = suite.isLoggedIn;
            fixture.detectChanges();
            const el = fixture.debugElement.nativeElement.querySelector(suite.element);
            expect(el).toBeTruthy(suite.description);
        });
    });
});
