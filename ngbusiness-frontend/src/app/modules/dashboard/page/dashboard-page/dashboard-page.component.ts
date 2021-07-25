import { Component, OnInit } from '@angular/core';

import { Store } from 'src/app/core/ngrx-store/store';
import { Client } from 'src/app/core/services/client.service';
import { Order } from 'src/app/core/services/order.service';

import { Store as NgrxStore } from "@ngrx/store";
import { Observable } from 'rxjs';

import { StartClientList } from 'src/app/core/ngrx-store/clients/clients.actions';
import { StartOrderList } from 'src/app/core/ngrx-store/orders/orders.actions';

import { getClientList } from 'src/app/core/ngrx-store/clients/clients.selectors';
import { getOrderList } from 'src/app/core/ngrx-store/orders/orders.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  clients!: Observable<Array<Client>>;
  orders!: Observable<Array<Order>>;

  constructor(private store: NgrxStore<Store>) {}

  ngOnInit(): void {
    this.clients = this.store.select(getClientList(6));
    this.orders = this.store.select(getOrderList(5));

    this.store.dispatch(StartClientList());
    this.store.dispatch(StartOrderList());
  }
}
