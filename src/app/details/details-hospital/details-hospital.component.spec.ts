import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DetailsHospitalComponent} from './details-hospital.component';
import {Router} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

class RouterStub {

}

class NgbCarouselConfigStub {

}

describe('DetailsHospitalComponent', () => {
    let component: DetailsHospitalComponent;
    let fixture: ComponentFixture<DetailsHospitalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                // ngb-carousel.forRoot()
            ],
            declarations: [DetailsHospitalComponent],    // declare the DetailsHospitalComponent component
            providers: [
            ]
        })
            .compileComponents();   // compile template and css
        // When compileComponents completes, the external templates and css files have been "inlined" and TestBed.createComponent can create new instances of DetailsHospitalComponent synchronously.
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
