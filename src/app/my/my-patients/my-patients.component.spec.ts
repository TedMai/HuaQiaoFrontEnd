import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyPatientsComponent} from './my-patients.component';
import {ActivatedRouteStub} from '../../service/mock/router.stub';
import {ActivatedRoute} from '@angular/router';
import {HospitalService} from '../../service/hosptial.service';
import {HospitalServiceMock} from '../../service/mock/hospital.service.mock';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStub} from '../../service/mock/modal.stub';

describe('MyPatientsComponent', () => {
    let component: MyPatientsComponent;
    let fixture: ComponentFixture<MyPatientsComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MyPatientsComponent],
            providers: [
                {provide: ActivatedRoute, useValue: activatedRoute},
                {provide: NgbModal, useValue: NgbModalStub},
                {provide: HospitalService, useClass: HospitalServiceMock}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyPatientsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
