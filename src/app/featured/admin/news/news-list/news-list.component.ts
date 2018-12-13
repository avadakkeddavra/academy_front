import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  News: any[];
  constructor(
    private NewsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.NewsService.all().subscribe((data: any[]) => {
      this.News = data;
    });
  }

}
