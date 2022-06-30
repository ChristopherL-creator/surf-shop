import { Component, OnInit } from '@angular/core';
import { compareProductsByName, compareProductsByPrice, Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  categories: Product[] = [];


  constructor( private pServ: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  search(){
    const input = document.getElementById('search-input') as HTMLInputElement;
    // non è sicuro che possa ricevere sempre un id, quindi la converto in htmlinput
    const searchString = input!.value.trim().toLowerCase();
    this.pServ.getProducts(searchString).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }

  getAllProducts(){
    this.pServ.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }

  orderProductsByName(){
    this.products.sort(compareProductsByName);
    // richiamo funzione statica "compareBy..." da todo-class.ts
  }

  orderProductsByPrice(){
    this.products.sort(compareProductsByPrice)
  }
}
