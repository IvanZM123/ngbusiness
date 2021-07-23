import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrderListPageComponent } from './pages/order-list-page/order-list-page.component';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';

@NgModule({
  declarations: [
    OrderListPageComponent,
    CreateOrderPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule {}
