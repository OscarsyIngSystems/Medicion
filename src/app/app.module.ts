import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeasurementFormComponent } from './pages/measurement-form/measurement-form.component';
import { NavarComponent } from './pages/navar/navar.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { DataDbService } from './services/data-db.service';

@NgModule({
  declarations: [AppComponent, MeasurementFormComponent, NavarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent],
})
export class AppModule {}
