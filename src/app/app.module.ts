import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContentComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Ajouter HttpClientModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
