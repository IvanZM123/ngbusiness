import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';

import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';

import { OrderListPageComponent } from './pages/order-list-page/order-list-page.component';
import { CreateOrderPageComponent } from './pages/create-order-page/create-order-page.component';

@NgModule({
  declarations: [
    OrderListPageComponent,
    CreateOrderPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    GeneralSharedModule
  ]
})
export class OrdersModule {}
