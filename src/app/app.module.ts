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
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
@NgModule({
  declarations: [AppComponent, MeasurementFormComponent, NavarComponent, OnlyNumbersDirective],
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
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
