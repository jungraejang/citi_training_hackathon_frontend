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
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { YearOverYearBarChartComponent } from './year-over-year-bar-chart/year-over-year-bar-chart.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WeeklyLineGraphComponent } from './weekly-line-graph/weekly-line-graph.component';
import { NetworthTableComponent } from './networth-table/networth-table.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    NetworthPanelComponent,
    CashPanelComponent,
    InvetmentPanelComponent,
    NetworthBarChartComponent,
    CashFlowIncomeChartComponent,
    MarketMoversComponent,
    MarketMoversMajorIndexesComponent,
    NavbarComponent,
    YearOverYearBarChartComponent,
    WeeklyLineGraphComponent,
    NetworthTableComponent
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
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressSpinnerModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
