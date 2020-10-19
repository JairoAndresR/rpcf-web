import { Component, OnInit } from '@angular/core';
import { User } from "./../../../core/models/user.model";
import { RegisterService } from "./../../../core/services/user/register.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerUser()
  }

  registerUser(){
    const newUser: User = {
      name:'prueba',
      email:'prueba',
      company_name:'prueba',
      password:'prueba',
      phone:'prueba'
    }

    this.registerService.registerUser(newUser)
    .subscribe(user =>{
      console.log(user)
    })
  }

}
