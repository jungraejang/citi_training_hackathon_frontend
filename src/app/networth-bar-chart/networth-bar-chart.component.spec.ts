import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthBarChartComponent } from './networth-bar-chart.component';

describe('NetworthBarChartComponent', () => {
  let component: NetworthBarChartComponent;
  let fixture: ComponentFixture<NetworthBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworthBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworthBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
