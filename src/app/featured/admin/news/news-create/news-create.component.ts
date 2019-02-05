import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {

  env = environment;
  noChanges = true;
  HeaderConfig = {
    selector: '.title',
    menubar: false,
    inline: true,
    plugins: [
      'textcolor',
      'lists',
      'contextmenu',
      'autolink'
    ],
    toolbar: 'undo redo | formatselect | bold italic underline',
    valid_elements: 'h1,h2,h3,h4,h5,h6,strong,em,span[style],a[href]',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    },
  };

  EditorConfig = {
    selector: '.new-content',
    menubar: false,
    inline: true,
    plugins: [
      'link',
      'textcolor',
      'lists',
      'contextmenu',
      'autolink',
      'link'
    ],
    toolbar: [
      'undo redo | formatselect | bold italic underline | fontsizeselect',
      'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | link linkchecker',
    ],
    link_list: [],
    link_assume_external_targets: true,
    link_context_toolbar: true
  };

  SingleMode = false;
  ParentNew: any = {
    attachements: [],
    mainImg: {
      path: '/assets/geometric-aquamarine.jpg'
    }
  };
  New: any = {};

  Tags: any[] = [];
  Attachements: any[] = [];
  Mode: string;
  modalOptions: Materialize.ModalOptions = {
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  };

  constructor(
    private NewsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.Mode = 'edit';
        this.NewsService.get(params.id).subscribe((data: any) => {
          this.ParentNew = data;
          this.ParentNew.mainImg.path = this.env.api + '/' + this.ParentNew.mainImg.path;
          this.New = {
            title: data.title,
            content: data.content,
            attachements: data.attachements.map((item) => item.id),
            tags: data.tags.map((item) => item.id ),
            main_img: data.mainImg.id
          };
        });
      } else {
        this.Mode = 'create';
        this.New = {
          title: '',
          content: '',
          attachements: [],
          tags: [],
          main_img: 1
        };
      }
    });
    this.NewsService.allTags().subscribe((data: any) => {
      this.Tags = data.data;
    });
    this.NewsService.allAttachements().subscribe((data: any) => {
      data.forEach((file) => {
        if(file.list === 1) {
          this.EditorConfig.link_list.push({title: file.name, value: this.env.api+'/'+file.path});
        }
        if (! this.New.attachements.includes(file.id)) {
          file.selected = 0;
          this.Attachements.push(file);
        }
      });
    });
  }

  mainImg($event) {
    this.ParentNew.mainImg = $event;
    this.ParentNew.mainImg.path = this.env.api + '/' + $event.path;
    this.New.main_img = $event.id;
    this.noChanges = false;
  }

  selectedFiles(files) {
    files.forEach((file) => {
      const existedAttach = this.ParentNew.attachements.find( (attach) => attach.id === file.id);
        if(!existedAttach) {
          this.ParentNew.attachements.push(file)
          this.New.attachements.push(file.id)
        }
    });
  }

  addFile(file) {
    file.selected = file.selected === 0 ? 1 : 0;
    if ( file.selected === 1) {
      const attachement = file;
      this.New.attachements.push(attachement.id);
    } else {
      this.New.attachements.forEach((item, index) => {
        if (item.id === file.id) {
          this.New.attachements.splice(index, 1);
        }
      });
    }
    console.log(this.New);
  }

  deleteTag(tagId) {
    this.NewsService.deleteTag(this.ParentNew.id, tagId).subscribe((data) => {
      const TagIndex = this.New.tags.find((tag, index) => {
        if (tagId === tag) {
          return index;
        }
      });
      this.New.tags.splice(TagIndex, 1);
    });
  }

  deleteFile(fileId) {
    const confrimation = confirm('Are you sure to delete this attachement? ');
    if (confrimation) {
      if(this.Mode === 'edit') {
        console.log(this.New);
        this.NewsService.deleteAttachements(this.ParentNew.id, fileId).subscribe((data) => {
          
          this.New.attachements.find((file, index) => {
            if (fileId === file) {
              this.New.attachements.splice(index, 1);
              this.ParentNew.attachements.splice(index, 1);
            }
          });
        });
      } else {

      }
    }

  }

  save() {
    console.log(this.New);
    if (this.ParentNew && this.ParentNew.id) {
      this.NewsService.edit(this.ParentNew.id, this.New).subscribe((data: any) => {
        console.log(data);
      });

    } else {
      this.NewsService.create(this.New).subscribe((data) => {
      });
    }

  }
}
