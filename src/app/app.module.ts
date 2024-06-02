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
import { UserFormTemplateDrivenComponent } from './user-form-template-driven/user-form-template-driven.component';
import { ReactiveFormulaireComponent } from './reactive-formulaire/reactive-formulaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { LazyloadingimageComponent } from './lazyloadingimage/lazyloadingimage.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { SubjectFeatureAComponent } from './subject-feature-a/subject-feature-a.component';
import { SubjectFeatureBComponent } from './subject-feature-b/subject-feature-b.component';
import {SharedService} from "./shared.service";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TodoListComponent } from './components/todo-list/todo-list.component'; // Importer ReactiveFormsModule


import { todoReducer } from './store/todos/todo.reducer';
import { TodoEffects } from './store/todos/todo.effects';
import { TodoService } from './services/todo.service';
import {ProductEffects} from "./store/products/products.effects";
import { ProductComponent } from './product/product.component';

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
    NavbarComponent,
    UserFormTemplateDrivenComponent,
    ReactiveFormulaireComponent,
    LazyloadingimageComponent,
    ChildcomponentComponent,
    SubjectFeatureAComponent,
    SubjectFeatureBComponent,
    TodoListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule // Ajouter HttpClientModule ici
    ,FormsModule // Ajouter FormsModule ici
    ,RouterModule.forRoot(routes)
    ,ReactiveFormsModule // Ajouter ReactiveFormsModule ici
    ,LazyLoadImageModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

    ,BrowserModule
    ,StoreModule.forRoot({ todo: todoReducer })
    ,EffectsModule.forRoot([TodoEffects,ProductEffects])
    ,StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true }) // configure store devtools


  ],
  exports: [RouterModule],
  providers: [SharedService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
