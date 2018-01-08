import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddModalComponent } from './patient-add-modal.component';

describe('PatientAddModalComponent', () => {
  let component: PatientAddModalComponent;
  let fixture: ComponentFixture<PatientAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
