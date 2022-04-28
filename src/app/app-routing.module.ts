import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeasurementFormComponent } from './pages/measurement-form/measurement-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/measurement', pathMatch: 'full' },
  { path: 'measurement', component: MeasurementFormComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
