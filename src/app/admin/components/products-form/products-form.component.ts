import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'definition': ['', Validators.required]
    })
  }

  registerProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      this.productService.newProduct(this.form.value).subscribe()
      this.router.navigate(['/admin/collector-configuration/products'])
    }
  }

}
