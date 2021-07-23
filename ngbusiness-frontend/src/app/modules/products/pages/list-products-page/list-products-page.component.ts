import { Component, OnInit } from '@angular/core';

import { Product, ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.scss']
})
export class ListProductsPageComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.list().subscribe(products => {
      this.products = products;
    });
  }
}
