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
      console.log("data for cash", data)
      this.cashData = data
    })
  }

  makeInvestmentApiServiceCall() {
    this.investmentApiService.getInvestmentData(this.id).subscribe((data) => {
      console.log("data for cash", data)
      this.investmentData = data

    })
  }

}
