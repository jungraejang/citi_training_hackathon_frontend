import { Component, OnInit, Input } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { single } from './data';

@Component({
  selector: 'app-year-over-year-bar-chart',
  templateUrl: './year-over-year-bar-chart.component.html',
  styleUrls: ['./year-over-year-bar-chart.component.css']
})
export class YearOverYearBarChartComponent implements OnInit {

  ngOnInit(): void {
    this.makeYearToYearApiServiceCall()
  }

  single: any[];
  // multi: any[];
  @Input() nightMode = false

  view: [number, number] = [350, 400];

  id: number = 1
  yearToYearChartData: any = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Net Worth';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  year: number[] = [2021, 2020, 2019, 2018, 2017]

  constructor(private chartApiService: ChartService) {
    Object.assign(this, { single })
  }

  onSelect(event) {
  }

  makeYearToYearApiServiceCall() {
    this.chartApiService.getYearOverYearChartData(this.id).subscribe((data: []) => {
      for (let i = 0; i < 5; i++) {
        if (data && data.length) {
          let obj = {}
          console.log("iiii", i)
          obj['name'] = `${this.year[i]}`
          obj['value'] = data[i]
          this.yearToYearChartData.push(obj)
        }
      }
      this.yearToYearChartData = [...this.yearToYearChartData]

    })
  }

}
