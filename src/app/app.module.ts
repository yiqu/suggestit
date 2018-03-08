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
import { SnackBarService } from './shared/service/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatIconModule,
    NotFoundModule,
    SuggestModule,
    TitleModule,
    AppRoutingModule
  ],

  providers: [
    SnackBarService
  ],
  
  entryComponents: [
    SnackBarComponent
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
