import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyProfileComponent} from './my-profile.component';
import {ContainerService} from '../../service/container.service';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {RouterStub} from '../../service/mock/router.stub';
import {LoginServiceMock} from '../../service/mock/login.service.mock';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('MyProfileComponent', () => {
    let component: MyProfileComponent;
    let fixture: ComponentFixture<MyProfileComponent>;
    let containerService: ContainerService;
    // let loginService: LoginService;

    beforeEach(() => {
        containerService = new ContainerService();
        // loginService = new LoginService();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyProfileComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: Router, useClass: RouterStub},
                {provide: ContainerService, useValue: containerService},
                {provide: LoginService, useClass: LoginServiceMock},
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
