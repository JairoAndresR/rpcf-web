import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductDefinition } from 'src/app/core/models/product-definition.model';
import { ProductDefinitionService } from 'src/app/core/services/product/product-definition.service';

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
    private productService: ProductDefinitionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { this.buildForm() }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) =>{
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(
        product => this.form.patchValue(product)
      )
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
      let product = this.form.value
      product.id = this.id
      this.productService.updateProduct(product).subscribe();
      this.router.navigate(['admin/collector-configuration/products'])
    }
  }

}
