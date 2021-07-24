import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";
import { StartProductList } from 'src/app/core/ngrx-store/products/product.actions';

import { Product } from 'src/app/core/services/product.service';
import { getListProducts } from 'src/app/core/ngrx-store/products/products.selectors';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.scss']
})
export class ListProductsPageComponent implements OnInit {
  products!: Observable<Array<Product>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.products = this.store.select(getListProducts);
    this.store.dispatch(StartProductList());
  }
}
