import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded About (changelog) component.
 */
@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {
  }
    
  // change log information array
  changelog: Array<any> = [
    {
      version: '0.0.1',
      date: new Date('6/30/17'),
      changes: 'Created initial version',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.1.1',
      date: new Date('1/28/18'),
      changes: 'Added input area',
      externalLink: undefined,
      linkUrl: null
    }
  ];
}
