import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ApexChart } from 'ng-apexcharts';
import { DataDbService } from 'src/app/services/data-db.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  chartOptions!: any;
  info!: any;
  izqSistolica: any = [];
  izqDiastolica: any = [];
  derSistolica: any = [];
  derDiastolica: any = [];
  showGraph: boolean = false;

  constructor(private dbData: DataDbService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getCollection();
  }

  async getCollection() {
    // this.info = await this.dbData.getData();
    this.dbData.getDataOrderLimit(true, 14).then((res) => {
      console.log(res, 'res');
      this.info = res;

      let categories: any[] = [];
      this.info.forEach((element: any) => {
        console.log(element);
        this.izqSistolica.push(Number(element.izqSistolica));
        this.izqDiastolica.push(Number(element.izqDiastolica));
        this.derSistolica.push(Number(element.derSistolica));
        this.derDiastolica.push(Number(element.derDiastolica));
        categories.push(
          this.datePipe.transform(
            new Date(element.dateNew.seconds * 1000),
            'dd/MM/yyyy h:mm a'
          )
        );
      });
      console.log(categories);
      this.showGraph = this.info.length > 0;
      this.chartOptions = {
        legend: {
          show: true,
        },
        series: [
          {
            name: 'Sistólica izquierda',
            data: this.izqSistolica,
            color: '#FBF46D',
          },
          {
            name: 'Diastólica izquierda',
            data: this.izqDiastolica,
            color: '#B4FE98',
          },
          {
            name: 'Sistólica derecha',
            data: this.derSistolica,
            color: '#77E4D4',
          },
          {
            name: 'Distólica derecha',
            data: this.derDiastolica,
            color: '#998CEB',
          },
        ],
        chart: {
          toolbar: {
            show: false,
          },
          height: 500,
          type: 'bar',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: categories, //['Semana x', 'Semana y', 'Semana z'],
        },
      };
    });
  }
}
