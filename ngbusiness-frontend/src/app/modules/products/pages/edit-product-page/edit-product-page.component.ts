import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/core/services/product.service';

import { Store as NgrxStore, Store } from "@ngrx/store";

import { getProductById } from 'src/app/core/ngrx-store/products/products.selectors';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {
  product!: Observable<Product | undefined>;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: NgrxStore<Store>
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.product = this.store.select(getProductById(id));
  }
}
