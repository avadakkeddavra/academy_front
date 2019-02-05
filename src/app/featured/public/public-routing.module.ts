import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { PublicComponent } from './public.component';
import {NewSingleComponent} from "./new-single/new-single.component";

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
              path: 'new/:id',
              component: NewSingleComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
