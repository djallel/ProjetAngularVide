import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import {HttpClientModule} from "@angular/common/http";
import { UserListComponent } from './user-list/user-list.component';
import { PropertybindingETinterpolationComponent } from './propertybinding-etinterpolation/propertybinding-etinterpolation.component';
import {FormsModule} from "@angular/forms";
import { DirectivesComponent } from './directives/directives.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DisplayContentComponent,
    UserListComponent,
    PropertybindingETinterpolationComponent,
    DirectivesComponent,
    ServiceComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Ajouter HttpClientModule ici
    ,FormsModule // Ajouter FormsModule ici
    ,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
