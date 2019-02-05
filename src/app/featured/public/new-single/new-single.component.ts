import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../../core/services/news.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-new-single',
  templateUrl: './new-single.component.html',
  styleUrls: ['./new-single.component.scss']
})
export class NewSingleComponent implements OnInit {
  Env = environment.api;
  New: any;
  constructor(
    private route: ActivatedRoute,
    private news: NewsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.news.get(params.id).subscribe((data: any) => {
        this.New = data;
      })
    });
  }

}
