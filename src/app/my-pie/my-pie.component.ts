import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'my-pie',
  templateUrl: './my-pie.component.html',
  styleUrls: ['./my-pie.component.css']
})
export class MyPieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
   firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseUrl: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
  };
  public pieChartLabels: Label[] = ['Turkey', 'Syria', 'Afghanistan'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
