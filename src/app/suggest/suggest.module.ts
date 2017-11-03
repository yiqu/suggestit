import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SuggestComponent } from './suggest.component';


/**
 * This class represents the entire Suggest component.
 */
@NgModule({
  declarations: [
    SuggestComponent
  ],

  imports: [
    FormsModule,
    HttpModule
  ],

  exports:[
    SuggestComponent
  ],

  providers: []
})
export class SuggestModule {}
