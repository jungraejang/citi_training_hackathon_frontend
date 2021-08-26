import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarketMoversService {

  constructor(private http: HttpClient) { }

  getMarketMoversData(id: number) {
    return this.http.get(`http://nickgroupbhackathon-nickgroupbhackathon.namdevops18.conygre.com/transactions/${id}/market_movers `)
  }
}
