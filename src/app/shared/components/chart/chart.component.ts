import { Component, Input, SimpleChanges  } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from "highcharts";
import Utils from '../../../utils/utils';
const More = require('highcharts/highcharts-more');
More(Highcharts);
import Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);  

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  
  highcharts = Highcharts;
  @Input() data: [];
  updateFlag: Boolean = false;
  
  chartOptions: Options = {};

  constructor(){
    this.chartOptions = Utils.chartConfig;
  }

  ngOnChanges() {
    this.chartOptions.series = [...this.data];
    this.updateFlag = true;
  }

}