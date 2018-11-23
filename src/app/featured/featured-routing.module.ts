import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'search',
        component: SearchComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
