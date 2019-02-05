import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import {FormsModule} from "@angular/forms";
import {DragulaModule} from "ng2-dragula";

@NgModule({
  declarations: [NavbarComponent, AdminNavbarComponent, CreateTagsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    DragulaModule.forRoot()
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    AdminNavbarComponent,
    CreateTagsComponent,
    DragulaModule
  ]
})
export class SharedModule { }
