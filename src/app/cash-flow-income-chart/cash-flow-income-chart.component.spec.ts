import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowIncomeChartComponent } from './cash-flow-income-chart.component';

describe('CashFlowIncomeChartComponent', () => {
  let component: CashFlowIncomeChartComponent;
  let fixture: ComponentFixture<CashFlowIncomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowIncomeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashFlowIncomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
