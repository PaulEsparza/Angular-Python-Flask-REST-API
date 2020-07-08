import { Component, OnInit, Input } from '@angular/core';

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
  @Input() editingProduct: boolean;
  @Input() product: any;

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {

  }

  onCreateProduct(productForm: NgForm) {
    //console.log(productForm.value);
    console.log(this.editingProduct);
    if (!this.editingProduct) {
      console.log("Insert");
      this.service.createProduct(productForm.value).subscribe(data => {
        alert("Product successfully created");
        location.reload();
      }, error => {
        console.log("ERROR: Create product: " + error);
      });
    } else {
      console.log("Update");
      console.log(productForm.value);
      this.service.updateProduct(productForm.value).subscribe(data => {
        alert("Product successfully updated");
        location.reload();
      }, error => {
        console.log("ERROR: Update Product: " + error);
      });
    }
  }

}
