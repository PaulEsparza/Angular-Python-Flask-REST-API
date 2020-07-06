import { Component, OnInit } from '@angular/core';

import { Product } from '../app/model/product';
import { ProductServiceService } from '../app/service/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products:Product [];

  title = 'angularPythonFlaskRESTAPI';

  constructor(private service:ProductServiceService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(data => {
      //console.log(data);
      this.products = data;
    });
  }
}
