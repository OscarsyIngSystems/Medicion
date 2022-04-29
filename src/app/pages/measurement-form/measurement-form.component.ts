import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-measurement-form',
  templateUrl: './measurement-form.component.html',
  styleUrls: ['./measurement-form.component.css'],
})
export class MeasurementFormComponent implements OnInit {
  createFormGrup() {
    return new FormGroup({
      dateNew: new FormControl(''),
    });
  }

  measuresForm!: FormGroup;
  constructor(private dbData: DataDbService) {
    this.measuresForm = this.createFormGrup();
  }

  ngOnInit(): void {}

  onResetForm() {
    this.measuresForm.reset();
  }

  onSaveForm() {
    console.log('guarde form', this.measuresForm.value);

    this.dbData.saveMeasures(this.measuresForm.value);
  }
}
