import { Component, Input } from '@angular/core';

import { Product } from 'src/app/core/services/product.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from 'src/app/core/ngrx-store/store';

import { StartProductRemove } from 'src/app/core/ngrx-store/products/product.actions';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private store: NgrxStore<Store>) {}

  remove(): void {
    if (confirm(`${ this.product.title } sera eliminado. ¿Estas seguro?`)) {
      this.store.dispatch(
        StartProductRemove({ payload: this.product })
      )
    }
  }
}
