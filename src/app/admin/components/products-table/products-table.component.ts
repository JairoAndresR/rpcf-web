import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator

  products: Product[];
  displayedColumns: string[] = ['ID', 'Nombre', 'Acciones'];
  dataSource = null;

  constructor(private productService:ProductService) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts():void{
    this.productService.getAllDefinitions().subscribe(
      products => {
        this.products = products['Definitions']
      }
    )
    this.dataSource = new MatTableDataSource<Product>(this.products);
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id);
    this.getAllProducts()
  }

}
