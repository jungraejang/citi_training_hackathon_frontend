import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CashServicesService {

  constructor(private http: HttpClient) { }

  getCashData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/cash_total`)
  }

}
