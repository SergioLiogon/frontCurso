import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    //rutas para direccionar la pagina

{path: '', redirectTo:'/appComponent', pathMatch: 'full'},
{path: 'appComponent' , component: AppComponent}

]


@NgModule({
    //Import de las rutas creadas para direccionar las paginas
imports: [RouterModule.forRoot(routes)],
exports:[RouterModule],

})
export class AppRoutingModule {

}
