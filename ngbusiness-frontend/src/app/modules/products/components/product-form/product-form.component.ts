import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ProductService } from 'src/app/core/services/product.service';

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

  constructor(private productService: ProductService) {}

  create(): void {
    this.productService.create(this.form.value).subscribe(console.log);
  }
}
