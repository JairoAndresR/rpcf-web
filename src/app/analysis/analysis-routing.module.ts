import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { BarchartAuthorsvsproductsComponent } from "./components/barchart-authorsvsproducts/barchart-authorsvsproducts.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
