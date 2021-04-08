import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {

    charts: any = [];

    createChart(container, options?: Object) {
        let opts = { ...options };
        let e = document.createElement("div");
        e.classList.add("chart-container");
        e.classList.add("chart-container-width");

        container.appendChild(e);

        if (!!opts.chart) {
            opts.chart['renderTo'] = e;
        }
        else {
            opts.chart = {
                'renderTo': e
            }
        }
        this.charts.push(new Highcharts.Chart(opts));
    }
}