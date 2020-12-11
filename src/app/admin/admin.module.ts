import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";


import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { MaterialModule } from "./../material/material.module";
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { GruplacFormComponent } from './components/gruplac-form/gruplac-form.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { GruplacTableComponent } from './components/gruplac-table/gruplac-table.component';
import { GruplacEditComponent } from './components/gruplac-edit/gruplac-edit.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';

@NgModule({
  declarations: [
    AdminHeaderComponent, 
    MenuListItemComponent, 
    AdminHomeComponent, 
    AdminLayoutComponent, 
    GruplacFormComponent, 
    ProductsFormComponent, 
    GruplacTableComponent, 
    GruplacEditComponent, 
    ProductsTableComponent, ProductsEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminHeaderComponent,
    MenuListItemComponent,
    AdminLayoutComponent,
    AdminHomeComponent
  ]
})
export class AdminModule { }
