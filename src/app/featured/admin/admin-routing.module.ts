import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
        {
            path: '',
            component: DashboardComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'register',
            component: LoginComponent
        },
        {
          path: 'news',
          loadChildren: './news/news.module#NewsModule',
          canActivate: [AuthGuard]
        },
        {
          path: 'file-manager',
          loadChildren: './file-manager/file-manager.module#FileManagerModule',
          canActivate: [AuthGuard]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
