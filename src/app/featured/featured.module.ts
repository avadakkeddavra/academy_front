import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedRoutingModule } from './featured-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FeaturedRoutingModule
  ]
})
export class FeaturedModule { }
