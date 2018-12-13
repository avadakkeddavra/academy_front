import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

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


  New: any = { 
    title: 'Default',
    content: 'Default',
    attachements: [],
    tags: [],
    main_img: 0
  }

  Tags: any[] = [];
  Attachements: any[] = [];

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.NewsService.allTags().subscribe((data: any) => {
      this.Tags = data.data
    });
    this.NewsService.allAttachements().subscribe((data: any) => {
      this.Attachements = data;
      this.Attachements = this.Attachements.map((file) => {
        file.selected = 0;
        return file;
      });
      console.log(this.Attachements)
    }); 
  }

  tagsManage() {

  }

  deleteTag(tag) {

  }

  addFile(file) {
    console.log(file);
    file.selected = file.selected === 0 ? 1 : 0;
    if(file.selected === 1) {
      const attachement = file;
      delete attachement.selected;
      this.New.attachements.push(attachement);
    } else {
      this.New.attachements.forEach((item, index) => {
        if(item.id === file.id) {
          this.New.attachements.splice(index,1);
        }
      })
    }
    
  }

  save() {
  }
}
