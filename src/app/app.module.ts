import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Router} from '@angular/router'
import {HttpClientModule} from "@angular/common/http" // para poder acceder al back por http
import {FormsModule} from "@angular/forms"; //Para poder agarrar las cosas de los forms

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Se importa el app-routing.module.ts donde se hicieron los direccionamientos de las paginas
    RouterModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
