import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { TrackerRoutingModule } from './tracker/tracker-routing.module';
// import { TrackerListComponent } from './tracker/tracker-list/tracker-list.component';

const routes: Routes = [
  { path: 'tracker', loadChildren: () => TrackerRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
