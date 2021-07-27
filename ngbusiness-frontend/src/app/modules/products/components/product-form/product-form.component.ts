import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from "src/app/core/ngrx-store/store";
import { StartProductCreate } from 'src/app/core/ngrx-store/products/product.actions';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required, Validators.pattern(/[0-9]/)]),
    picture: new FormControl("", [Validators.required])
  });

  constructor(private store: NgrxStore<Store>) {}

  create(): void {
    this.store.dispatch(
      StartProductCreate({
        payload: this.form.value
      })
    );
  }
}
