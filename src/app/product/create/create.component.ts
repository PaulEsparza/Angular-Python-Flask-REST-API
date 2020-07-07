import { Component, OnInit } from '@angular/core';

import { ProductServiceService } from '../../service/product-service.service';
import { Product } from '../../model/product';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = {} as Product;

  constructor(private service:ProductServiceService) { }

  ngOnInit(): void {
  }

  onCreateProduct(productForm:NgForm){
    //console.log(productForm.value);
    this.service.createProduct(productForm.value).subscribe(data => {
      location.reload();
    }, error => {
      console.log("ERROR: Create product: " + error);
    });
  }

}
