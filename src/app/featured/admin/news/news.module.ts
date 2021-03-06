import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import {RouterModule} from '@angular/router';
import { FileManagerModule } from '../file-manager/file-manager.module';
import {MzToastService} from "ngx-materialize";


@NgModule({
  declarations: [NewsListComponent, NewsComponent, NewsCreateComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    EditorModule,
    FileManagerModule
  ],
  bootstrap: [NewsComponent],
  providers: [MzToastService]
})
export class NewsModule { }
