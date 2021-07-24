import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store as NgrxStore } from "@ngrx/store";
import { Store } from 'src/app/core/ngrx-store/store';

import { StartClientCreate } from 'src/app/core/ngrx-store/clients/clients.actions';

@Component({
  selector: 'client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^([0-9]){8}$/g)]),
    avatar: new FormControl("", [Validators.required]),
    NIT: new FormControl("", [Validators.required, Validators.pattern(/^([0-9]){4}-([0-9]){6}-([0-9]){3}-([0-9]){1}$/)])
  });

  constructor(private store: NgrxStore<Store>) {}

  create(): void {
    this.store.dispatch(
      StartClientCreate({
        payload: this.form.value
      })
    );
  }
}
