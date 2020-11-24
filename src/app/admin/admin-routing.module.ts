import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GruplacFormComponent } from "./components/gruplac-form/gruplac-form.component";
import { AdminLayoutComponent } from "./components/admin-layout/admin-layout.component";
import { ProductsFormComponent } from "./components/products-form/products-form.component";
import { GruplacTableComponent } from './components/gruplac-table/gruplac-table.component';
import { GruplacEditComponent } from './components/gruplac-edit/gruplac-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'collector-conf',
        children: [
          {
            path: 'gruplac',
            component: GruplacTableComponent
          },
          {
            path: 'gruplac/create',
            component: GruplacFormComponent
          },
          {
            path: 'gruplac/edit/:id',
            component: GruplacEditComponent
          },
          {
            path: 'products',
            component: ProductsFormComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
