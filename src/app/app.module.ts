import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';
import { PropertybindingETinterpolationComponent } from './propertybinding-etinterpolation/propertybinding-etinterpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContentComponent,
    UserListComponent,
    PropertybindingETinterpolationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Ajouter HttpClientModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
