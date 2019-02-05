import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../core/services/menu.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Menu: any;
  Tags: any;
  constructor(
    private menu: MenuService
  ) { }

  ngOnInit() {
    this.menu.get().subscribe((data: any) => {
      this.Menu = data;
    });
    this.menu.getAllTags().subscribe((data: any) => {
      this.Tags = data.data.filter((item) => item.in_menu === false);
      console.log(this.Tags)
    })
  }

  addToMenu(id) {
    if(id != -1) {
      this.menu.addToMenu(id).subscribe((menuItem: any) => {
        this.Menu.push(menuItem);
        this.Tags.forEach((item, index) => {
          if(item.id === Number(id)) {
            this.Tags.splice(index, 1)
          }
        })
      })
    }
  }

  removeFromMenu(id) {
   this.menu.removeFromMenu(id).subscribe((item: any) => {
     this.Menu.forEach((item, index) => {
       if(item.id === id) {
         this.Tags.push(item);
         this.Menu.splice(index, 1);
       }
     });

   })
  }
  updateMenuPosition(event) {
    const data = event.map((item) => item.id);
    this.menu.updatePosition(data).subscribe((response: any) => {
      console.log(response);
    })
  }
  createNewTag(event) {
    this.menu.createTag(event).subscribe((data: any) => {
      this.Tags.push(data.data);
    })
  }
}
