import { Component, OnInit } from '@angular/core';
import { CashServicesService } from '../services/cash-services.service';
@Component({
  selector: 'app-networth-panel',
  templateUrl: './networth-panel.component.html',
  styleUrls: ['./networth-panel.component.css']
})
export class NetworthPanelComponent implements OnInit {
  panelOpenState = true;
  constructor(private cashApiService: CashServicesService) { }
  id: number = 1
  cashData: any = {}
  cashTotal: number = 0
  ngOnInit(): void {
  }

  handleTotalCashValue(value: number) {
    this.cashTotal = value
  }

  makeCashApiServiceCall() {
    this.cashApiService.getCashData(this.id).subscribe((data) => {
      this.cashData = data
    })
  }

}
