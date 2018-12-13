import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if(form.valid) {
      this.authService.login(form.value).subscribe((data: any) => {
        this.authService.setToken(data.token);
        this.router.navigate(['/admin'])
      })
    }
  }
}
