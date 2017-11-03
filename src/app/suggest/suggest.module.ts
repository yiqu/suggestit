import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuggestComponent } from './suggest.component';
import { TitleModule } from './title/title.module';
import { SuggestionModule } from './suggestion/suggestion.module';


/**
 * This class represents the entire Suggest component.
 */
@NgModule({
  declarations: [
    SuggestComponent
  ],

  imports: [
    FormsModule,
    HttpModule,
    SuggestionModule,
    TitleModule
  ],

  exports:[
    SuggestComponent
  ],

  providers: []
})
export class SuggestModule {}
