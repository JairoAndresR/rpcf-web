import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDefinition } from 'src/app/core/models/product-definition.model';
import { ProductDefinitionService } from 'src/app/core/services/product/product-definition.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator

  products: ProductDefinition[];
  displayedColumns: string[] = ['ID', 'Nombre', 'Acciones'];
  dataSource = null;

  constructor(private productService:ProductDefinitionService) { }

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
    this.dataSource = new MatTableDataSource<ProductDefinition>(this.products);
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(
      response => this.getAllProducts()
    );
  }

}
