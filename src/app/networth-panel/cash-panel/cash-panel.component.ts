import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cash-panel',
  templateUrl: './cash-panel.component.html',
  styleUrls: ['./cash-panel.component.css']
})
export class CashPanelComponent implements OnInit {
  //make networth - cash api here to fetch api data
  items: any = [
    223999.68,
    {
      CitibankSavings: 207000.34,
      CitibankCheckings: 16999.34
    }
  ]

  @Output() sendCashTotal: EventEmitter<number> = new EventEmitter()

  expandedIndex = 0;
  @Input() cashData: any = {}

  constructor() { }

  ngOnInit(): void {
    console.log("cashdata for cash  component", this.cashData)
  }

  ngOnChanges(): void {
    console.log("onchange triggered")
    this.sendTotalCashAmount()
  }

  sendTotalCashAmount() {
    this.sendCashTotal.emit(this.items[0])
  }


}
