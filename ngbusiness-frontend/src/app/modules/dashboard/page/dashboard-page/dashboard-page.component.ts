import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store as NgrxStore } from "@ngrx/store";
import { Subscription } from 'rxjs';

import { Store } from 'src/app/core/ngrx-store/store';
import { Order } from 'src/app/core/services/order.service';
import { Client } from 'src/app/core/services/client.service';
import { Product } from 'src/app/core/services/product.service';
import { BasicStat } from 'src/app/core/components/basic-stats-card/basic-stats-card.component';

import { StartOrderList } from 'src/app/core/ngrx-store/orders/orders.actions';
import { StartClientList } from 'src/app/core/ngrx-store/clients/clients.actions';
import { StartProductList } from 'src/app/core/ngrx-store/products/product.actions';

import { getOrderList } from 'src/app/core/ngrx-store/orders/orders.selectors';
import { getClientList } from 'src/app/core/ngrx-store/clients/clients.selectors';
import { getListProducts } from 'src/app/core/ngrx-store/products/products.selectors';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  products: Array<Product> = [];
  clients: Array<Client> = [];
  orders: Array<Order> = [];

  constructor(private store: NgrxStore<Store>) { }

  ngOnInit(): void {
    this.getClients();
    this.getOrders();
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      subscription => subscription?.unsubscribe()
    );
  }

  private getClients(): void {
    this.subscriptions.push(
      this.store.select(getClientList(6)).subscribe(
        clients => this.clients = clients
      )
    );

    this.store.dispatch(StartClientList());
  }

  private getOrders(): void {
    this.subscriptions.push(
      this.store.select(getOrderList(5)).subscribe(
        orders => this.orders = orders
      )
    );

    this.store.dispatch(StartOrderList());
  }

  private getProducts(): void {
    this.subscriptions.push(
      this.store.select(getListProducts).subscribe(
        products => this.products = products
      )
    );

    this.store.dispatch(StartProductList());
  }

  get items(): Array<BasicStat> {
    return [
      {
        title: "Total de productos",
        quantity: this.products.length,
        icon: "bx bx-box",
        color: "bg-primary-gradient"
      },
      {
        title: "Total de pedidos",
        quantity: this.orders.length,
        icon: "bx bx-list-ul",
        color: "bg-purple-gradient"
      },
      {
        title: "Total de clientes",
        quantity: this.clients.length,
        icon: "bx bx-user",
        color: "bg-success-gradient"
      }
    ]
  }
}
