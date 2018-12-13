import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${environment.api}/login`, data)
  }

  logout() {
    localStorage.removeItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  isLogedIn() {
    return localStorage.getItem('token') ? true : false;
  }
 
  register(data) {
    return this.http.post('/register', data);
  }
}
