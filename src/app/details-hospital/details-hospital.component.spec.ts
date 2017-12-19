import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHospitalComponent } from './details-hospital.component';

describe('DetailsHospitalComponent', () => {
  let component: DetailsHospitalComponent;
  let fixture: ComponentFixture<DetailsHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
