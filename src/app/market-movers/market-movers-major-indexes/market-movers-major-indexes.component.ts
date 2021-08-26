import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-market-movers-major-indexes',
  templateUrl: './market-movers-major-indexes.component.html',
  styleUrls: ['./market-movers-major-indexes.component.css']
})
export class MarketMoversMajorIndexesComponent implements OnInit {

  @Input() code: string = ""
  @Input() marketMoversTicker: any = ""
  @Input() marketMoversChange: any = ""


  constructor() { }

  ngOnInit(): void {
  }

}
