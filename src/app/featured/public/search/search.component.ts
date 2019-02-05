import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/core/services/news.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: string;
  News: Array<any>;
  constructor(
    private NewsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      this.search = params.search;
      this.NewsService.all(params.search).subscribe((data: any) => {
        this.News = data;
      })
    });
  }

}
