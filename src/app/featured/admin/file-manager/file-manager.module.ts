import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager.component';
import {FileManagerRoutingModule} from './file-manager-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [FileManagerComponent],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
    SharedModule
  ],
  exports: [FileManagerComponent]
})
export class FileManagerModule { }
