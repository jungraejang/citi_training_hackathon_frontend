import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invetment-panel',
  templateUrl: './invetment-panel.component.html',
  styleUrls: ['./invetment-panel.component.css']
})
export class InvetmentPanelComponent implements OnInit {
  // items = [{ name: "AMD", price: 1234.76, amount: 5 }, { name: "F", price: 2324.76, amount: 5 }, { name: "TSLA", price: 12312.76, amount: 5 }, { name: "GOGL", price: 12312.76, amount: 5 }, { name: "NVDA", price: 12312.76, amount: 5 }, { name: "USA", price: 12312.76, amount: 5 }, { name: "FIA", price: 12312.76, amount: 5 }];
  items: any = [
    23521.085000000003,
    {
      PFE: 1895.196,
      WDC: 1965,
      NRG: 227.889,
      NUE: 1799.85,
      BIIB: 10283.25,
      AMD: 1083.6,
      MU: 2970.4,
      PENN: 1199.3999999999999,
      ITA: 1063.7,
      CPB: 206,
      GPS: 826.8
    }
  ]
  expandedIndex = 0;

  @Input() investmentData: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
