import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(environment.api + '/news');
  }

  allTags() {
    return this.http.get(environment.api + '/tags');
  }

  create(data) {
    return this.http.post(environment.api + '/news', data);
  }

  edit(id, data) {
    return this.http.put(environment.api + '/news/' + id, data);
  }

  allAttachements() {
    return this.http.get(environment.api + '/files');
  }

  deleteTag(newId, tagId) {
    return this.http.delete(environment.api + '/news/' + newId + '/tag/' + tagId);
  }

  deleteAttachements(newId, fileId) {
    return this.http.delete(environment.api + '/news/' + newId + '/file/' + fileId);
  }

  get(id) {
    return this.http.get(environment.api + '/news/' + id);
  }
}
