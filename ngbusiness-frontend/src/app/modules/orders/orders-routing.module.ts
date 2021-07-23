import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';
import { OrderListPageComponent } from './pages/order-list-page/order-list-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: OrderListPageComponent
      },
      {
        path: "new",
        component: CreateOrderPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
