import { Component, OnInit } from '@angular/core';

import { Product } from '../app/model/product';
import { ProductServiceService } from '../app/service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];
  product = {} as Product;
  editingProduct: boolean = false;

  title = 'angularPythonFlaskRESTAPI';

  constructor(private service: ProductServiceService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe(data => {
      //console.log(data);
      this.products = data;
    });
  }

  onPreUpdate(product: Product) {
    this.editingProduct = true;
    this.service.getProductName(product.name).subscribe(data => {
      this.product = data;
    }, error => {
      console.log("ERROR: Get Product: " + error);
    });
  }

  onDeleteProduct(product: Product) {
    if(confirm("Are you sure you want to delete it?")){
      this.service.deleteProduct(product).subscribe(data => {
        //location.reload();
        alert("Product successfully removed");
        this.products = this.products.filter(p => p != product);
      }, error => {
        console.log("ERROR: Delete product: " + error)
      });
    }
  }

  onChange() {
    this.editingProduct = false;
    this.product = {} as Product;
  }
}
