import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSelectModalComponent } from './patient-select-modal.component';

describe('PatientSelectModalComponent', () => {
  let component: PatientSelectModalComponent;
  let fixture: ComponentFixture<PatientSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
