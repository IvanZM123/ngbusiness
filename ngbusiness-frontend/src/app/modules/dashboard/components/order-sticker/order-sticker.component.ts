import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/services/order.service';

@Component({
  selector: 'order-sticker',
  templateUrl: './order-sticker.component.html',
  styleUrls: ['./order-sticker.component.scss']
})
export class OrderStickerComponent {
  @Input() order!: Order;
}
