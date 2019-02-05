import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SearchComponent } from './search.component';
import {RouterModule} from "@angular/router";
import {NewSingleComponent} from "../new-single/new-single.component";

@NgModule({
  declarations: [SearchComponent, NewSingleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class SearchModule { }
