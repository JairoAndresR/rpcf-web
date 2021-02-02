import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GruplacFormComponent } from './components/gruplac-form/gruplac-form.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { GruplacTableComponent } from './components/gruplac-table/gruplac-table.component';
import { GruplacEditComponent } from './components/gruplac-edit/gruplac-edit.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AuthGuard } from './../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: AdminHomeComponent
      },
      {
        path: 'collector-configuration',
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
            path: 'products-result',
            component: ProductsTableComponent
          },
          {
            path: 'products-result/create',
            component: ProductsFormComponent
          },
          {
            path: 'products-result/edit/:id',
            component: ProductsEditComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRoutingModule { }
