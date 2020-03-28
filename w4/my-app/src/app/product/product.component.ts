import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductListComponent {
  products = products;


  constructor() {
  }

  ngOnInit() {
  }

}
