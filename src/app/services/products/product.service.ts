import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL = 'https://628d3321a3fd714fd040dac4.mockapi.io/products';

  constructor(private http: HttpClient){}

  getProducts(searchString?: string, category?: string): Observable<Product[]>{
    let url = this.BASE_URL + '?'; 
    // così ci da tutti gli elementi
    if (searchString) {
      url +='&name=' + searchString;
    } 
    
    if (category) {
      url += '&category=' + category;
    }
    return this.http.get<Product[]>(url);
  }

  getCategories(value?: string): Observable<Product[]>{
    let url = this.BASE_URL;
    if (value) {
      url = this.BASE_URL + '?category=' + value
    }
    return this.http.get<Product[]>(url);
  }


  getProductById(id: string): Observable<Product> {
    const url = this.BASE_URL + '/' + id;
    return this.http.get<Product>(url);
  }

}
