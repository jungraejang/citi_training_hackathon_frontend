import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyLineGraphComponent } from './weekly-line-graph.component';

describe('WeeklyLineGraphComponent', () => {
  let component: WeeklyLineGraphComponent;
  let fixture: ComponentFixture<WeeklyLineGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyLineGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
