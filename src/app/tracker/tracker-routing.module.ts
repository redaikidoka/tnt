import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerListComponent } from './tracker-list/tracker-list.component';


const routes: Routes = [
  { path: '', component: TrackerListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
