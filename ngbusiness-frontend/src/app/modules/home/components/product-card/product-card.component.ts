import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/mock/products.mock';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
}
