import { Component, OnInit } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = [
    'dateNew',
    'izqSistolica',
    'izqDiastolica',
    'derSistolica',
    'derDiastolica',
    'time',
  ];
  dataSource = [];
  documents: any;
  constructor(private dbData: DataDbService) {
    this.getCollection();
  }

  ngOnInit(): void {}

  async getCollection() {
    this.documents = await this.dbData.getData();

    this.dataSource = this.documents;
  }
}
