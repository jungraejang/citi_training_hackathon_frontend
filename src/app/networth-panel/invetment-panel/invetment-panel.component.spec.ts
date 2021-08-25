import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetmentPanelComponent } from './invetment-panel.component';

describe('InvetmentPanelComponent', () => {
  let component: InvetmentPanelComponent;
  let fixture: ComponentFixture<InvetmentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvetmentPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
