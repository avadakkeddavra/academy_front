import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news.service';
import { AuthInterceptor } from './auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  providers: [NewsService, AuthInterceptor]
})
export class CoreModule { }
