import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) {

  }
  id: number = 1

  getYearOverYearChartData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/year_over_year`)
  }

  getWeeklyNetWorthData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/graph_week`)
  }

  getCashTotalOverTimeData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/cash_total_over_time`)
  }

  getTotalOverTimeData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/total_over_time`)
  }
}
