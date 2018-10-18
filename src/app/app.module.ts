import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {RouterModule, Router} from '@angular/router'
import {HttpClientModule} from "@angular/common/http" // para poder acceder al back por http


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Se importa el app-routing.module.ts donde se hicieron los direccionamientos de las paginas
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
