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
  measuresForm!: FormGroup;

  constructor(
    private dbData: DataDbService,
    private fb: FormBuilder,
    public iziToast: Ng2IzitoastService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.measuresForm = this.fb.group({
      dateNew: [new Date(), [Validators.required]],
      time: [new Date().toLocaleTimeString(), [Validators.required]],
      izqSistolica: [' ', [Validators.required, Validators.max(999)]],
      izqDiastolica: [' ', [Validators.required, Validators.max(999)]],
      derSistolica: [' ', [Validators.required, Validators.max(999)]],
      derDiastolica: [' ', [Validators.required, Validators.max(999)]],
    });
  }

  onSaveForm() {
    console.log('guarde form', this.measuresForm.value);

    this.dbData.saveMeasures(this.measuresForm.value).then((response) => {
      if (response.id) {
        this.iziToast.success({
          title: 'Correcto!',
          message: 'Registro guardado',
        });

        this.initForm();
      }
    });
  }
}
