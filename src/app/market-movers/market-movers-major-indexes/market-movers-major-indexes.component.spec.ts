import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMoversMajorIndexesComponent } from './market-movers-major-indexes.component';

describe('MarketMoversMajorIndexesComponent', () => {
  let component: MarketMoversMajorIndexesComponent;
  let fixture: ComponentFixture<MarketMoversMajorIndexesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketMoversMajorIndexesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketMoversMajorIndexesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
