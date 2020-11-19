import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:[
      {
        path: 'accounts',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }  
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
