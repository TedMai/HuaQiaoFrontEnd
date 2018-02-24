import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './service/login.service';
import {HospitalService} from './service/hosptial.service';

class RouterStub {
}

class LoginServiceMock {
    public isLoggedIn = false;
}

class HospitalServiceMock {
}

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

    it('检查登录态', () => {
        const el = fixture.debugElement.nativeElement.querySelector('button');
        expect(el).toBeTruthy('未登录时应显示登录按键');
        expect(el.textContent).toContain('登录', '按键文字应为登录');
    });
});
