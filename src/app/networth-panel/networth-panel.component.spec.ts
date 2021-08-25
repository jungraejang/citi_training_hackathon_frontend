import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworthPanelComponent } from './networth-panel.component';

describe('NetworthPanelComponent', () => {
  let component: NetworthPanelComponent;
  let fixture: ComponentFixture<NetworthPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworthPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
