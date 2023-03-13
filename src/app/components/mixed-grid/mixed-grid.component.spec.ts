import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedGridComponent } from './mixed-grid.component';

describe('MixedGridComponent', () => {
  let component: MixedGridComponent;
  let fixture: ComponentFixture<MixedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
