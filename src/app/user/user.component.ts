import { Component, OnInit } from '@angular/core';


import { UserService } from './user.service'; // ijmport del user service
import { UserModel } from '../model/user.model';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService] // Se crea el provedor de servicio para usar los servicios
})
export class UserComponent implements OnInit {  

  private users: Array<UserModel>;

  constructor(private userService: UserService) { }// Se crea una variable en el constructor para poder usar todos los metodos de la clase User Service

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void{
    this.userService.getUsers().subscribe(res => {

      this.users = res;
      console.log(res);
    });
  }

}
