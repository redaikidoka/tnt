import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';

import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatSidenavModule],
  declarations: []
})

export class MaterialModule { }
