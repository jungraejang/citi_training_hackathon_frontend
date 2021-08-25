import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NetworthPanelComponent } from './networth-panel/networth-panel.component'
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CashPanelComponent } from './networth-panel/cash-panel/cash-panel.component';
import { InvetmentPanelComponent } from './networth-panel/invetment-panel/invetment-panel.component';
import { NetworthBarChartComponent } from './networth-bar-chart/networth-bar-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CashFlowIncomeChartComponent } from './cash-flow-income-chart/cash-flow-income-chart.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { MatChipsModule } from '@angular/material/chips';
import { MarketMoversMajorIndexesComponent } from './market-movers/market-movers-major-indexes/market-movers-major-indexes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NetworthPanelComponent,
    CashPanelComponent,
    InvetmentPanelComponent,
    NetworthBarChartComponent,
    CashFlowIncomeChartComponent,
    MarketMoversComponent,
    MarketMoversMajorIndexesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    CdkAccordionModule,
    NgxChartsModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
