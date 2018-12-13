import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  News: any[];
  constructor(
    private NewsService: NewsService
  ) { }

  ngOnInit() {
    this.NewsService.all().subscribe((data: any[]) => {
      this.News = data; 
    })
  }

}
