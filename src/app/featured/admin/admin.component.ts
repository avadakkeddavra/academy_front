import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userLogedIn: boolean;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userLogedIn = this.authService.isLogedIn();
  }

}
