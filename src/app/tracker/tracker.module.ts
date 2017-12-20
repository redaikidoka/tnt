import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerListComponent } from './tracker-list/tracker-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TrackerRoutingModule
  ],
  declarations: [TrackerListComponent]
})
export class TrackerModule { }
