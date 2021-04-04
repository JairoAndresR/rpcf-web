import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { GroupReportSelectorComponent } from './components/group-report-selector/group-report-selector.component';
import { ProductivityContainerComponent } from './components/productivity-container/productivity-container.component';
// import { ProductivityComponent } from './components/barchart/productivity/productivity.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchFormComponent
  },
  {
    path: 'group-reports',
    component: GroupReportSelectorComponent
  },
  {
    path: 'productivity',
    component: ProductivityContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule { }
