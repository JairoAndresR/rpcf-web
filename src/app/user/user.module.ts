import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
