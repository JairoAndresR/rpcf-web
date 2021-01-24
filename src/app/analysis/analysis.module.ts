import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule} from '@angular/material/core'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { BarchartAuthorsAndProductsComponent } from './components/barchart/barchart-authors-and-products/barchart-authors-and-products.component';
import { BarchartGroupAndProductsComponent } from './components/barchart/barchart-group-and-products/barchart-group-and-products.component';
import { ProductResultComponent } from './components/products-result/product-result.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
      HomeComponent,
      SearchFormComponent,
      BarchartAuthorsAndProductsComponent,
      BarchartGroupAndProductsComponent,
      ProductResultComponent],
    imports: [
        CommonModule,
        AnalysisRoutingModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatButtonModule,
        FormsModule
    ]
})
export class AnalysisModule { }
