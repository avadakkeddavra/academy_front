import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-tags',
  templateUrl: './create-tags.component.html',
  styleUrls: ['./create-tags.component.scss']
})
export class CreateTagsComponent implements OnInit {
  tagName = '';
  @Output() save = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}
