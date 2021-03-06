import { Component, OnInit } from '@angular/core';
import { User } from "./../../../core/models/user.model";
import { RegisterService } from "./../../../core/services/user/register.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private registerService:RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { this.buildForm() }

  ngOnInit(): void {

  }

  registerUser(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const user = this.form.value
      this.registerService.registerUser(user)
      .subscribe(user =>{
        this.router.navigate(['./account/login'])
      })
    }


  }

  private buildForm(){
    this.form = this.formBuilder.group({
      names: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
