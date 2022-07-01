import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  public searchString: string = ''; 

  public selectedCategory: string = '';

  constructor( private pServ: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  search(){
    // const input = document.getElementById('search-input') as HTMLInputElement;
    // non è sicuro che possa ricevere sempre un id, quindi la converto in htmlinput
    // this.searchString = input!.value.trim().toLowerCase(); 
    this.selectedCategory = '';
    this.pServ.getProducts(this.searchString).subscribe({
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
    this.products.sort((p1, p2) => p1.name.localeCompare(p2.name));
    // this.products.sort(compareProductsByName);
  }
  
  orderProductsByPrice(){
    this.products.sort((p1, p2) => p1.price - p2.price);
    // this.products.sort(compareProductsByPrice)
  } 

  filterByCategory(){ 
    // const select = document.getElementById("category-select") as HTMLSelectElement; 
    // non serve che richiami tramite geelementbyid, perché ho usato # in html
    // console.log(value); 
    this.searchString = '';
    this.pServ.getProducts(undefined, this.selectedCategory).subscribe({  
      // chiamo funzione tramite pServ, perchè qui non c'è
      next: products => this.products = products, 
      error: err => console.log(err)
    });
  }
}