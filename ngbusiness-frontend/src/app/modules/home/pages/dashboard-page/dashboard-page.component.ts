import { Component } from '@angular/core';

import { createOrder, Order } from 'src/app/core/mock/orders.mock';
import { createListItems } from 'src/app/core/mock/general.mock';
import { products } from 'src/app/core/mock/products.mock';
import { createUser } from 'src/app/core/mock/users.mock';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  clients = createListItems(createUser, 5);
  items: Array<Record<string, string | number>> = [
    {
      icon: "bx bx-box",
      title: products.length,
      subtitle: "Total de productos",
      color: "primary",
      path: "products",
    },
    {
      icon: "bx bx-cart",
      title: 15,
      subtitle: "Total de pedidos",
      color: "purple",
      path: "orders",
    },
    {
      icon: "bx bx-group",
      title: 25,
      subtitle: "Total de clientes",
      color: "success",
      path: "clients"
    },
  ];

  get orders() {
    const orders: Array<Order> = createListItems(createOrder, 5);
    return orders.map(order => ({
      picture: order.product.picture,
      title: order.product.title,
      subtitle: order.user.fullname,
      textTop: `$${ order.total }`,
      textBottom: `Items: ${ order.quantity }`
    }));
  }
}
