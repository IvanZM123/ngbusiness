import { Component } from '@angular/core';

import { createOrder, Order } from 'src/app/core/mock/orders.mock';
import { createListItems } from 'src/app/core/mock/general.mock';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent {
  orders: Array<Order> = createListItems(createOrder);
}
