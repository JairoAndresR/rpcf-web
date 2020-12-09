import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { this.buildForm() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      this.id = params.id;
      const product = this.productService.getProduct(this.id)
      this.form.patchValue(product)
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'definition': ['', [Validators.required]]
    });
  }

  updateProduct(event:Event){
    event.preventDefault();
    if(this.form.valid){
      this.productService.updateProduct(this.form.value);
      this.router.navigate(['admin/collector-configuration/products'])
    }
  }

}
