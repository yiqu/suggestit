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
    },
    {
      version: '0.2.1',
      date: new Date('6/18/18'),
      changes: 'Added more logic for parsing words. Prediction logic added. Added chips to display results, and minor changes',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.2.2',
      date: new Date('6/20/18'),
      changes: 'Added confidence level percentage to results for displaying',
      externalLink: undefined,
      linkUrl: null
    }
  ];
}
