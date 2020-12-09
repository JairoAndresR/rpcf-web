import { Component, OnInit } from '@angular/core';
import { User } from "./../../../core/models/user.model";
import { LoginService } from "./../../../core/services/user/login.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form:FormGroup;
  constructor(private loginService:LoginService, private formbuider:FormBuilder, private router:Router) { 
  }

  ngOnInit(): void {
    //this.loginUser()
    this.buildForm()
  }

  private buildForm(){
    this.form = this.formbuider.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  loginUser(event:Event){
    const newUser: User = {
      email:'prueba',
      password:'prueba'
    }
    event.preventDefault();
    if(this.form.valid){
      const user = this.form.value;
      //this.loginService.loginUser(user)
      console.log(user)
    /*
    this.loginService.loginUser(newUser).subscribe(user =>{
      console.log(user)
    })*/
  }

  }

}
