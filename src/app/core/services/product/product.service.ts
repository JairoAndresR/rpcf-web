import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: '1',
      name: 'Libros',
      definition: 'definition string test case'
    },
    {
      id: '2',
      name: 'Articulos',
      definition: 'definition string test case'
    }
  ]
  
  constructor(private http: HttpClient) { }

  getAllDefinitions(){
    return this.products;
  }

  getProduct(id:string){
    return this.products.find(product=>{return product.id===id})
  }

  newProduct(product:Product){
    this.products.push(product)
  }

  deleteProduct(id:string){
    this.products = this.products.filter(product=>{return product.id!=id})
  }

  updateProduct(product:Product){
    console.log(product)
  }


}
