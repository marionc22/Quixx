import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedNumberColorComponent } from './mixed-number-color.component';

describe('MixedNumberColorComponent', () => {
  let component: MixedNumberColorComponent;
  let fixture: ComponentFixture<MixedNumberColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedNumberColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedNumberColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
