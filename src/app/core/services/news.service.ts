import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(environment.api+'/news')
  }

  allTags() {
    return this.http.get(environment.api+'/tags');
  }

  create(data) {
    return this.http.post(environment.api+'/news', data);
  }

  allAttachements() {
    return this.http.get(environment.api+'/files');
  }
}
