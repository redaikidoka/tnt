import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule
  ],
  exports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatSelectModule, MatTableModule],
  declarations: []
})

export class MaterialModule { }
