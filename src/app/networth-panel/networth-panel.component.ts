import { Component, OnInit } from '@angular/core';
import { CashServicesService } from '../services/cash-services.service';
import { InvestmentService } from '../services/investment.service';
@Component({
  selector: 'app-networth-panel',
  templateUrl: './networth-panel.component.html',
  styleUrls: ['./networth-panel.component.css']
})
export class NetworthPanelComponent implements OnInit {
  panelOpenState = true;
  constructor(private cashApiService: CashServicesService, private investmentApiService: InvestmentService) { }
  id: number = 1
  cashData: any = []
  cashTotal: number = 0
  investmentData: any = []
  ngOnInit(): void {
    this.makeCashApiServiceCall()
    this.makeInvestmentApiServiceCall()
  }

  handleTotalCashValue(value: number) {
    this.cashTotal = value
  }

  makeCashApiServiceCall() {
    this.cashApiService.getCashData(this.id).subscribe((data) => {
      this.cashData[0] = data[0].toFixed(2)
      // this.cashData[0] = data[0]
      // this.cashData[1] = data[1]
      // this.cashData = data
      let obj: any = {}
      //round up decimals to two while loping through the data obj.
      for (let item in data[1]) {
        obj[item] = data[1][item].toFixed(2)
      }
      this.cashData[1] = obj
    })
  }



  makeInvestmentApiServiceCall() {
    this.investmentApiService.getInvestmentData(this.id).subscribe((data) => {
      this.investmentData[0] = Math.round(data[0])
      let obj: any = {}
      //round up decimals to two while loping through the data obj.
      for (let item in data[1]) {
        obj[item] = data[1][item].toFixed(2)
      }
      this.investmentData[1] = obj
    })
  }

}
