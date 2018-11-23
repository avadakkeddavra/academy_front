import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class DashboardModule { }
