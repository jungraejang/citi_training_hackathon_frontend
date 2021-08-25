import { Component, OnInit } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-networth-bar-chart',
  templateUrl: './networth-bar-chart.component.html',
  styleUrls: ['./networth-bar-chart.component.css']
})
export class NetworthBarChartComponent implements OnInit {

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    console.log(event);
  }

}
