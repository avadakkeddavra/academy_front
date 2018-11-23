import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzInputModule, MzCardModule, MzNavbarModule } from 'ngx-materialize';
import { MzBadgeModule } from 'ngx-materialize'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule,
    MzBadgeModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule,
    MzBadgeModule
  ]
})
export class MaterialModule { }
