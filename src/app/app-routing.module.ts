import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './pages/graph/graph.component';
import { HistoryComponent } from './pages/history/history.component';
import { MeasurementFormComponent } from './pages/measurement-form/measurement-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/measurement', pathMatch: 'full' },
  { path: 'measurement', component: MeasurementFormComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'graph', component: GraphComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
