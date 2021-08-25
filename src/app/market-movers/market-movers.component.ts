import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  codes = [
    { name: 'S&P', price: 45 },
    { name: "Dow Jones", price: 324 },
    { name: "NASDAQ", price: 231 },
    { name: "10-TR Bond", price: 987 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
