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

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NotFoundModule,
    SuggestModule,
    TitleModule
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
