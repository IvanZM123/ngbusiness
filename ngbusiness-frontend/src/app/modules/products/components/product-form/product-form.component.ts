import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";
import { StartProductCreate } from 'src/app/core/ngrx-store/products/product.actions';
import { Product } from 'src/app/core/services/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() product!: Product | null | undefined;
  form: FormGroup = new FormGroup({
    title: new FormControl(this.data?.title || "", [Validators.required]),
    description: new FormControl(this.data?.description || "", [Validators.required]),
    price: new FormControl(this.data?.price || "", [Validators.required, Validators.pattern(/[0-9]/)]),
    picture: new FormControl(this.data?.picture || "", [Validators.required])
  });

  constructor(private store: NgrxStore<Store>) {}

  create(): void {
    this.store.dispatch(
      StartProductCreate({
        payload: this.form.value
      })
    );
  }

  get data() {
    return this.product;
  }
}
