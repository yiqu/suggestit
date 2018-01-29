import { Component, OnInit } from '@angular/core';

// App version
const version = require('../../../../package.json')


/**
 * Title component consists of title and sub title
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'title-section',
  templateUrl: 'title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title: String = "Suggestive Type";
  version: String;

  constructor() {}

  ngOnInit() { 
    this.version = version.version;
  }
}