import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMobileComponent } from './my-mobile.component';

describe('MyMobileComponent', () => {
  let component: MyMobileComponent;
  let fixture: ComponentFixture<MyMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
