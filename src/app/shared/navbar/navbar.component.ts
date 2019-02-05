import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../core/services/menu.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  Menu: any[];
  constructor(
    private menu: MenuService
  ) { }

  ngOnInit() {
    this.menu.get().subscribe((data: any) => {
      this.Menu = data;
    })
  }

}
