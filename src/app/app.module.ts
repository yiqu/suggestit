import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SuggestModule } from './suggest/suggest.module';
import { TitleModule } from './shared/title/title.module';
import { NotFoundModule } from './404/404.module';
import { AppComponent } from './app.component';
import { SnackBarComponent } from './shared/snackbar/snackbar.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatIconModule,
    NotFoundModule,
    SuggestModule,
    TitleModule
  ],

  providers: [],
  
  entryComponents: [SnackBarComponent],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
