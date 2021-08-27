import { Component, OnInit } from '@angular/core';
import { multi } from './data';
import { ChartService } from '../services/chart.service';
import { DataSource } from '@angular/cdk/collections';
@Component({
  selector: 'app-weekly-line-graph',
  templateUrl: './weekly-line-graph.component.html',
  styleUrls: ['./weekly-line-graph.component.css']
})
export class WeeklyLineGraphComponent implements OnInit {


  multi: any[];
  view: [number, number] = [350, 470];
  id: number = 1
  weeklyNetWorthData: any[];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Net Worth';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private chartApiService: ChartService) {
    Object.assign(this, { multi });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  makeWeeklyNetWorthApiServiceCall() {
    let holdingObj: any = {}
    this.chartApiService.getWeeklyNetWorthData(this.id).subscribe((data: []) => {
      let baseObj = { "name": "My Net Worth", "series": [] }
      for (let i = 0; i < data.length; i++) {
        if (data && data.length) {
          let obj = {}
          let date = new Date()
          let last = new Date(date.getTime() - (i * 24 * 60 * 60 * 1000))
          let day = last.getDate()
          let month = last.getMonth() + 1
          obj["name"] = `${month}/${day}`
          obj["value"] = data[i]
          baseObj["series"].push(obj)
        }
      }
      holdingObj = baseObj
      // this.weeklyNetWorthData.push(baseObj)
      this.weeklyNetWorthData = [holdingObj]
    })
  }
  ngOnInit(): void {
    this.makeWeeklyNetWorthApiServiceCall()
  }

}
