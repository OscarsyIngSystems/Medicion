import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MeasurementFormComponent } from './pages/measurement-form/measurement-form.component';
import { NavarComponent } from './pages/navar/navar.component';

@NgModule({
  declarations: [AppComponent, MeasurementFormComponent, NavarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
