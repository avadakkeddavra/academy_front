import { Component, OnInit } from '@angular/core';
import {FilesService} from '../../../core/services/files.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  Folders: any;
  height = window.innerHeight - 65;
  Files: any;

  modalOptions = {
    dismissible: true,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: '100%',
    endingTop: '10%'
  };

  ActiveFolder: any;
  constructor(
    private files: FilesService
  ) { }

  ngOnInit() {
    this.files.allFolders().subscribe((data) => {
      this.Folders = data;
      this.Folders[0].active = true;
      this.ActiveFolder = this.Folders[0];
      this.files.getFolder(this.Folders[0].id).subscribe((files: any) => {
        this.Files = files;
      });
    });
  }
  getFolderFiles(id) {
    this.files.getFolder(id).subscribe((files: any) => {
      this.Files = files;
      this.Folders.forEach((item) => {
        if (item.id === id) {
          item.active = true;
          this.ActiveFolder = item;
        } else {
          item.active = false;
        }
      });
    });
  }
  fileAction(file) {
    if (file.type.indexOf('folder') !== -1) {
      this.getFolderFiles(file.id);
    }
  }
  deleteFile(file) {
    const confiramtion = confirm('Are you sure ?');
    if ( !confiramtion ) {
      return;
    }
    if (file.type.indexOf('folder') !== -1) {
      this.files.delete(file.id).subscribe((data) => {
        this.Folders.forEach((item, index) => {
          if (item.id === file.id) {
            this.Folders.splice(index, 1);
          }
        });
        this.Files.forEach((item, index) => {
          if (item.id === file.id) {
            this.Files.splice(index,  1);
          }
        });
      });
    } else {
      this.files.deleteFile(file.id).subscribe((data) => {
        this.Files.forEach((item, index) => {
          if (item.id === file.id) {
            this.Files.splice(index,  1);
          }
        });
      });
    }
  }


  uploadFiles(FileInput) {
    if (FileInput.files.length > 0) {
      console.log(FileInput.files);
      const data = new FormData();
      data.append('files', FileInput.files[0]);
      console.log(data);
      this.files.upload(this.ActiveFolder.id, data).subscribe((files: any[]) => {
        files.forEach((item) => {
          this.Files.push(item);
        });
      });
    }
  }

  createNewFolder(name: string) {
    if (name.length > 0) {
      this.files.createFolder(this.ActiveFolder.id, {name}).subscribe((folder) => {
        this.Folders.push(folder);
        this.Files.unshift(folder);
      });
    }
  }
}
