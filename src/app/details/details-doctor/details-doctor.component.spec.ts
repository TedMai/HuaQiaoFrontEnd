import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsDoctorComponent} from './details-doctor.component';
import {ActivatedRouteStub, RouterStub} from '../../service/mock/router.stub';
import {ActivatedRoute, Router} from '@angular/router';
import {ContainerService} from '../../service/container.service';

describe('DetailsDoctorComponent', () => {
    let component: DetailsDoctorComponent;
    let fixture: ComponentFixture<DetailsDoctorComponent>;
    let activatedRoute: ActivatedRouteStub;
    let containerService: ContainerService;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
        containerService = new ContainerService();
        containerService.set(
            {
                departmentName: 'Angular',
                doctor: {}
            }
        )
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsDoctorComponent],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: Router, useClass: RouterStub},
                {provide: ContainerService, useValue: containerService}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
