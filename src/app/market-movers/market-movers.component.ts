import { Component, OnInit, Input } from '@angular/core';
import { MarketMoversService } from '../services/market-movers.service';
@Component({
  selector: 'app-market-movers',
  templateUrl: './market-movers.component.html',
  styleUrls: ['./market-movers.component.css']
})
export class MarketMoversComponent implements OnInit {

  marketMoversData: any = []

  codes = [
    { name: 'S&P', price: 45 },
    { name: "Dow Jones", price: 324 },
    { name: "NASDAQ", price: 231 },
    { name: "10-TR Bond", price: 987 }
  ]

  constructor(private marketMoversService: MarketMoversService) { }

  id: number = 1
  ngOnInit(): void {
    this.makeMarketMoversServiceCall()
  }

  makeMarketMoversServiceCall() {
    this.marketMoversService.getMarketMoversData(this.id).subscribe((data) => {
      console.log("data for market movers", data)
      this.marketMoversData = data
    })
  }

}
