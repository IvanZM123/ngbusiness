import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from 'src/app/core/ngrx-store/store';
import { Order } from 'src/app/core/services/order.service';

import { Store as NgrxStore } from "@ngrx/store";
import { StartOrderList } from 'src/app/core/ngrx-store/orders/orders.actions';
import { getOrderList } from 'src/app/core/ngrx-store/orders/orders.selectors';

@Component({
  selector: 'app-order-list-page',
  templateUrl: './order-list-page.component.html',
  styleUrls: ['./order-list-page.component.scss']
})
export class OrderListPageComponent implements OnInit {
  orders!: Observable<Array<Order>>;
  
  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.orders = this.store.select(getOrderList);
    this.store.dispatch(StartOrderList());
  }
}
