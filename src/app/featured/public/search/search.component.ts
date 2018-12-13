import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  News: Array<any>;
  constructor(
    private NewsService: NewsService
  ) { }

  ngOnInit() {
    this.NewsService.all().subscribe((data: any) => {
      this.News = data;
    })
  }

}
