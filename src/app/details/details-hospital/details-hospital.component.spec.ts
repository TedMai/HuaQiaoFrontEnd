import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DetailsHospitalComponent} from './details-hospital.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {NO_ERRORS_SCHEMA} from '@angular/core';

class ActivatedRouteStub {

}

class NgbCarouselConfigStub {

}

describe('DetailsHospitalComponent', () => {
    let component: DetailsHospitalComponent;
    let fixture: ComponentFixture<DetailsHospitalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // NgbModule.forRoot()
            ],
            declarations: [DetailsHospitalComponent],    // declare the DetailsHospitalComponent component
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                {provide: ActivatedRoute, useClass: ActivatedRouteStub},
                {provide: NgbCarouselConfig, useClass: NgbCarouselConfigStub}
            ]
        })
            .compileComponents();   // compile template and css
        // When compileComponents completes, the external templates and css files have been "inlined".
        // TestBed.createComponent can create new instances of DetailsHospitalComponent synchronously.
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsHospitalComponent);
        component = fixture.componentInstance;
        // Do not configure the TestBed after calling compileComponents.
        // Make compileComponents the last step before calling TestBed.createComponent to instantiate the component-under-test.
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
