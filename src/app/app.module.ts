import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HighchartsChartModule } from "highcharts-angular";
import { AppComponent } from "./app.component";
import { ChartComponent } from "./shared/components/chart/chart.component";
import { HighchartsService } from "./services/highcharts.service";
import { ChartPanelComponent } from "./components/chart-panel/chart-panel.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HighchartsChartModule],
  declarations: [
    AppComponent,
    CustomChartComponent,
    ChartComponent,
    ChartPanelComponent
  ],
  bootstrap: [AppComponent],
  providers: [HighchartsService]
})
export class AppModule {}
