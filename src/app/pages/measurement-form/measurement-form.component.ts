import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng2IzitoastService } from 'ng2-izitoast';
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

  constructor(
    private dbData: DataDbService,
    private fb: FormBuilder,
    public iziToast: Ng2IzitoastService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  onResetForm() {
    this.measuresForm.reset();
  }

  initForm() {
    this.measuresForm = this.fb.group({
      dateNew: [this.day, [Validators.required]],
      time: [this.time, [Validators.required]],
      izqSistolica: ['', [Validators.required, Validators.max(999)]],
      izqDiastólica: ['', [Validators.required, Validators.max(999)]],
      derSistolica: ['', [Validators.required, Validators.max(999)]],
      derDiastólica: ['', [Validators.required, Validators.max(999)]],
    });
  }

  onSaveForm() {
    console.log('guarde form', this.measuresForm.value);

    this.dbData.saveMeasures(this.measuresForm.value).then((response) => {
      if (response.id) {
        this.iziToast.show({
          title: 'Hey',
          message: 'What would you like to add?',
        });
        this.initForm();
      }
    });
  }

  async getCollection() {
    this.documents = await this.dbData.getData();
    console.log(this.documents);
  }
}
