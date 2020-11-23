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
      },
      {
        path: '',
        loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
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
