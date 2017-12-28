import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentCheckComponent } from './appointment-check.component';

describe('AppointmentCheckComponent', () => {
  let component: AppointmentCheckComponent;
  let fixture: ComponentFixture<AppointmentCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
