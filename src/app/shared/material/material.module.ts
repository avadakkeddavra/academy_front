import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MzButtonModule,
  MzInputModule,
  MzCardModule,
  MzNavbarModule,
  MzIconModule,
  MzSelectModule,
  MzTabModule,
  MzModalModule
} from 'ngx-materialize';
import { MzBadgeModule } from 'ngx-materialize';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule,
    MzBadgeModule,
    MzIconModule,
    MzSelectModule,
    MzTabModule,
    MzModalModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule,
    MzBadgeModule,
    MzIconModule,
    MzSelectModule,
    MzTabModule,
    MzModalModule
  ]
})
export class MaterialModule { }
