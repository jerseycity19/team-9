import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLoginComponent } from './land-login.component';

describe('LandLoginComponent', () => {
  let component: LandLoginComponent;
  let fixture: ComponentFixture<LandLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
