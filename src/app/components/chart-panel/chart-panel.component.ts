import { Component, OnInit } from "@angular/core";
import Utils from '../../utils/utils';

@Component({
  selector: 'app-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.css']
})
export class ChartPanelComponent implements OnInit {
  myData = [];
  ngOnInit(): void {
    this.myData = Utils.surveryResults;
  }
}
