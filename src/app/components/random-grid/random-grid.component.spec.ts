import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGridComponent } from './random-grid.component';

describe('RandomGridComponent', () => {
  let component: RandomGridComponent;
  let fixture: ComponentFixture<RandomGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
