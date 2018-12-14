import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  getFolder(id) {
    return this.http.get(environment.api + '/folders/' + id);
  }

  rename(id, data) {
    return this.http.put(environment.api + '/folders/' + id, data);
  }

  delete(id) {
    return this.http.delete(environment.api + '/folders/' + id);
  }

  upload(id, data) {

    return this.http.post(environment.api + '/folders/' + id + '/files', data);
  }

  allFolders() {
    return this.http.get(environment.api + '/folders');
  }

  deleteFile(id) {
    return this.http.delete(environment.api + '/files/' + id);
  }

  createFolder(id, data) {
    return this.http.post(environment.api + '/folders/' + id, data);
  }
}
