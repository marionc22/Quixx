import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedColorsComponent } from './mixed-colors.component';

describe('MixedColorsComponent', () => {
  let component: MixedColorsComponent;
  let fixture: ComponentFixture<MixedColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
