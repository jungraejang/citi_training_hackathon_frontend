import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { cash_total_over_time } from './data';
import { total_over_time } from './data';
@Component({
  selector: 'app-networth-table',
  templateUrl: './networth-table.component.html',
  styleUrls: ['./networth-table.component.css']
})
export class NetworthTableComponent implements OnInit {

  id: number = 1

  tableTotalArray: any = []

  displayedColumns: string[] = ['time', 'cTOT', 'tOT', 'nCOT']


  constructor(private chartApiService: ChartService) {

  }

  async ngOnInit(): Promise<void> {
    // this.makeCashTotalOvertimeApiServiceCall()
    this.buildTablePayload(cash_total_over_time, total_over_time)

  }

  async makeCashTotalOvertimeApiServiceCall() {
    try {
      const cashTotalOverTime = await this.chartApiService.getCashTotalOverTimeData(this.id).subscribe((data) => {
        console.log("data from cash total over time", data)
      })
      const totalOvertime = await this.chartApiService.getTotalOverTimeData(this.id).subscribe((data) => {
        console.log("data from total over time", data)
      })
      this.tableTotalArray = [cashTotalOverTime, totalOvertime]
    }
    finally {
      console.log("table data fetch success")
    }
  }

  buildTablePayload(cTOT, tOt) {
    //CTOT is cash total over time
    //tot is total over time
    let timeFrame = ["Week", "Month", "Quarter", "Year"]
    let payload: any = {}
    for (let i = 0; i < 4; i++) {
      let payloadItem = {}
      payloadItem["time"] = timeFrame[i]
      payloadItem["cTOT"] = cTOT[i].toFixed(2)
      payloadItem["tOT"] = tOt[i].toFixed(2)
      payloadItem["nCOT"] = Number(cTOT[i] + tOt[i]).toFixed(2)
      this.tableTotalArray.push(payloadItem)
    }

    console.log("payload", this.tableTotalArray)

  }

  // makeTotalOvertimeApiServiceCall() {
  //   this.chartApiService.getTotalOverTimeData(this.id).subscribe((data) => {
  //     console.log("data from total over time", data)
  //   })
  // }

}
