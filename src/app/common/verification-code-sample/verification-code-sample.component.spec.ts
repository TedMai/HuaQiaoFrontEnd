import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCodeSampleComponent } from './verification-code-sample.component';

describe('VerificationCodeSampleComponent', () => {
  let component: VerificationCodeSampleComponent;
  let fixture: ComponentFixture<VerificationCodeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationCodeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationCodeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
