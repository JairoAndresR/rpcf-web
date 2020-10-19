import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
