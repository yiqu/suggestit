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
      version: '0.1.0',
      date: new Date('6/30/17'),
      changes: 'Created initial version',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.2.0',
      date: new Date('1/28/18'),
      changes: 'Added input area',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.3.0',
      date: new Date('6/18/18'),
      changes: 'Added more logic for parsing words. Prediction logic added. Added chips to display results, and minor changes',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.4.0',
      date: new Date('6/20/18'),
      changes: 'Added confidence level percentage to results for displaying',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.4.0',
      date: new Date('7/7/18'),
      changes: 'Look and feel update to the word chips, enlarged font. Logic updates',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.5.0',
      date: new Date('7/8/18'),
      changes: 'Added ability to show all results and show less results',
      externalLink: undefined,
      linkUrl: null
    },
    {
      version: '0.6.0',
      date: new Date('7/14/18'),
      changes: 'Added ability for click and input suggested word into text box',
      externalLink: undefined,
      linkUrl: null
    }
  ];
}
