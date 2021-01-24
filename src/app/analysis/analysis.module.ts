import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule} from '@angular/material/core'; 
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatButtonModule} from '@angular/material/button';
import { BarchartAuthorsvsproductsComponent } from './components/barchart-authorsvsproducts/barchart-authorsvsproducts.component';
import { BarchartGroupvsproductsComponent } from './components/barchart-groupvsproducts/barchart-groupvsproducts/barchart-groupvsproducts.component';
import { ProductResultComponent } from './components/products-result/product-result.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SearchFormComponent, BarchartAuthorsvsproductsComponent, BarchartGroupvsproductsComponent, ProductResultComponent],
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
