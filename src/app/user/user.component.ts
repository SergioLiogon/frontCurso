import { Component, OnInit } from '@angular/core';


import { UserService } from './user.service'; // ijmport del user service

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService] // Se crea el provedor de servicio para usar los servicios
})
export class UserComponent implements OnInit {
              // Se crea una variable en el constructor para poder usar todos los metodos de la clase User Service
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
