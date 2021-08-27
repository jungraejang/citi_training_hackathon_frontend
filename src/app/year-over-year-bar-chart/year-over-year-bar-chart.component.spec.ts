import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearOverYearBarChartComponent } from './year-over-year-bar-chart.component';

describe('YearOverYearBarChartComponent', () => {
  let component: YearOverYearBarChartComponent;
  let fixture: ComponentFixture<YearOverYearBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearOverYearBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearOverYearBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
