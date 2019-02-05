import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(environment.api + '/menu');
  }

  addToMenu(id) {
    return this.http.put(environment.api + '/menu/' + id, {});
  }

  removeFromMenu(id) {
    return this.http.delete(environment.api + '/menu/' + id)
  }
  getAllTags() {
    return this.http.get(environment.api + '/tags');
  }
  updatePosition(data) {
    return this.http.put(environment.api + '/menu/position' , {menu: data});
  }
  createTag(name){
    return this.http.post(environment.api + '/tags', {name});
  }
}

