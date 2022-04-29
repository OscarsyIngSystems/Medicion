import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-measurement-form',
  templateUrl: './measurement-form.component.html',
  styleUrls: ['./measurement-form.component.css'],
})
export class MeasurementFormComponent implements OnInit {
  documents: any;
  day = new Date();
  time =
    this.day.getHours() +
    ':' +
    this.day.getMinutes() +
    ':' +
    this.day.getSeconds();
  dateCurrent =
    this.day.getDate() +
    '-' +
    (this.day.getMonth() + 1) +
    '-' +
    this.day.getFullYear();

  measuresForm!: FormGroup;
  constructor(private dbData: DataDbService) {
    this.measuresForm = this.createFormGrup();
  }

  ngOnInit(): void {}

  createFormGrup() {
    return new FormGroup({
      dateNew: new FormControl(this.day),
      time: new FormControl(this.time),
    });
  }

  onResetForm() {
    this.measuresForm.reset();
  }

  onSaveForm() {
    console.log('guarde form', this.measuresForm.value);

    this.dbData.saveMeasures(this.measuresForm.value);
  }

  async getCollection() {
    this.documents = await this.dbData.getData();
    console.log(this.documents);
  }
}
