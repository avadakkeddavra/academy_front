import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {

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
    toolbar: 'undo redo | bold italic underline',
    valid_elements: 'strong,em,span[style],a[href]',
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
    ],
    toolbar: [
      'undo redo | bold italic underline | fontselect fontsizeselect',
      'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent ',
    ],
    valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li',
    valid_styles: {
      '*': 'font-size,font-family,color,text-decoration,text-align'
    },
  };

  ParentNew: any = {};
  New: any = {};

  Tags: any[] = [];
  Attachements: any[] = [];

  constructor(
    private NewsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.NewsService.get(params.id).subscribe((data: any) => {
          this.ParentNew = data;
          this.New = {
            title: data.title,
            content: data.content,
            attachements: data.attachements.map((item) => item.id),
            tags: data.tags.map((item) => item.id ),
            main_img: data.mainImg.id
          };
        });
      } else {
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
        if (! this.New.attachements.includes(file.id)) {
          file.selected = 0;
          this.Attachements.push(file);
        }
      });
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
      this.NewsService.deleteAttachements(this.ParentNew.id, fileId).subscribe((data) => {
        const AttachementIndex = this.New.attachements.find((file, index) => {
          if (fileId === file) {
            return index;
          }
        });
        this.New.attachements.splice(AttachementIndex, 1);
        this.ParentNew.attachements.splice(AttachementIndex, 1);
      });
    }

  }

  save() {
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
