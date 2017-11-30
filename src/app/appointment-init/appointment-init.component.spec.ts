import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentInitComponent } from './appointment-init.component';

describe('AppointmentInitComponent', () => {
  let component: AppointmentInitComponent;
  let fixture: ComponentFixture<AppointmentInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
