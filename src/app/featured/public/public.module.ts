import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SearchModule } from './search/search.module';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    DashboardModule,
    SearchModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
