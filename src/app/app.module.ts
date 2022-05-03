import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeasurementFormComponent } from './pages/measurement-form/measurement-form.component';
import { NavarComponent } from './pages/navar/navar.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { DataDbService } from './services/data-db.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { HistoryComponent } from './pages/history/history.component';
import { GraphComponent } from './pages/graph/graph.component';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    MeasurementFormComponent,
    NavarComponent,
    OnlyNumbersDirective,
    HistoryComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    Ng2IziToastModule,
    MatTableModule,
    MatSortModule,
    NgApexchartsModule,
  ],
  providers: [
    DataDbService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
