import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzInputModule, MzCardModule, MzNavbarModule, MzIconModule, MzSelectModule, MzTabModule } from 'ngx-materialize';
import { MzBadgeModule } from 'ngx-materialize'

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
    MzTabModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzNavbarModule,
    MzBadgeModule,
    MzIconModule,
    MzSelectModule,
    MzTabModule
  ]
})
export class MaterialModule { }
