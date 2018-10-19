import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient} from "@angular/common/http" // para poder acceder al back por http

import { UserModel } from '../model/user.model';
import {RestResponse} from '../model/restResponse.model';
@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param user 
   */
  public validate(user:UserModel):boolean{

    let isValid = true;

    if(!user.firstName){

      isValid=false;
    }
    if(!user.firstSurname){

      isValid=false;
    }
    if(!user.adress){

      isValid=false;
    }
    return isValid;
  }
  public saveOrUpdate(user: UserModel): Observable<RestResponse>{
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));

  }

}
