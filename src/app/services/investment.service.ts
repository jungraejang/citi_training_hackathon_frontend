import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(private http: HttpClient) {

  }
  getInvestmentData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/stock_totals`)
  }
}
