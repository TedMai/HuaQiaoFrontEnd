import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListDoctorComponent} from './list-doctor.component';
import {ActivatedRouteStub, RouterStub} from '../../service/mock/router.stub';
import {ContainerService} from '../../service/container.service';
import {ActivatedRoute, Router} from '@angular/router';

describe('ListDoctorComponent', () => {
    let component: ListDoctorComponent;
    let fixture: ComponentFixture<ListDoctorComponent>;
    let activatedRoute: ActivatedRouteStub;
    let containerService: ContainerService;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
        containerService = new ContainerService();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListDoctorComponent],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: Router, useClass: RouterStub},
                {provide: ContainerService, useValue: containerService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
