import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
    //rutas para direccionar la pagina

{path: '', redirectTo:'/userComponent', pathMatch: 'full'},
{path: 'appComponent' , component: AppComponent},
{path: 'userComponent' , component: UserComponent},
{path: 'createUserComponent' , component: CreateUserComponent}

]


@NgModule({
    //Import de las rutas creadas para direccionar las paginas
imports: [RouterModule.forRoot(routes)],
exports:[RouterModule],

})
export class AppRoutingModule {

}
