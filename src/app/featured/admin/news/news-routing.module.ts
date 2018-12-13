import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCreateComponent } from './news-create/news-create.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
        {
            path: '',
            component: NewsListComponent,
        },
        {
            path: 'create',
            component: NewsCreateComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
