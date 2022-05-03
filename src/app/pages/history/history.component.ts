import { Component, OnInit, ViewChild } from '@angular/core';
import { DataDbService } from 'src/app/services/data-db.service';
import { MatSort, Sort } from '@angular/material/sort';
import { _MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
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
  dataSource = new _MatTableDataSource();
  documents!: any[];
  constructor(
    private dbData: DataDbService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    this.getCollection();
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {}

  async getCollection() {
    this.documents = await this.dbData.getData();
    this.dataSource.data = this.documents;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
