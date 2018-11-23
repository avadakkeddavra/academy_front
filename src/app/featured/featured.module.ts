import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedRoutingModule } from './featured-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SearchModule,
    DashboardModule, 
    FeaturedRoutingModule
  ]
})
export class FeaturedModule { }
