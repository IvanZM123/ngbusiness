import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from 'src/app/core/services/product.service';
import { Category } from 'src/app/core/services/category.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";

import { StartCategoryList } from 'src/app/core/ngrx-store/categories/categories.actions';
import { StartProductList } from 'src/app/core/ngrx-store/products/product.actions';

import { getCategoryList } from 'src/app/core/ngrx-store/categories/categories.selectors';
import { getListProducts } from 'src/app/core/ngrx-store/products/products.selectors';

@Component({
  selector: 'app-list-products-page',
  templateUrl: './list-products-page.component.html',
  styleUrls: ['./list-products-page.component.scss']
})
export class ListProductsPageComponent implements OnInit {
  products!: Observable<Array<Product>>;
  categories!: Observable<Array<Category>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.categories = this.store.select(getCategoryList);
    this.store.dispatch(StartCategoryList());
    
    this.products = this.store.select(getListProducts);
    this.store.dispatch(StartProductList());
  }
}
