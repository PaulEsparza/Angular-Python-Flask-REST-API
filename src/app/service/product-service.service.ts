import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  URL = 'http://localhost:5000'
  HEADERS = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.URL+"/products", {headers: this.HEADERS});
  }

  getProductName(name:string){
    return this.http.get<Product>(this.URL+"/products/"+name, {headers: this.HEADERS});
  }

  createProduct(product:Product){
    return this.http.post<Product>(this.URL+"/products",product, {headers: this.HEADERS});
  }

  updateProduct(product:Product){
    return this.http.put<Product>(this.URL+"/products/"+product.name, product, {headers: this.HEADERS});
  }

  deleteProduct(product:Product){
    return this.http.delete<Product>(this.URL+"/products/"+product.name, {headers: this.HEADERS});
  }
}
