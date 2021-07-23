import { Component, OnInit } from '@angular/core';

import { categories, Category, Product, products } from 'src/app/core/mock/products.mock';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  categories: Array<Category> = categories;
  products: Array<Product> = products;

  constructor() { }

  ngOnInit(): void {
  }
}
