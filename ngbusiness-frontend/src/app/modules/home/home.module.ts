import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from "./home-routing.module";

import { HomeLayoutComponent } from './layout/home-layout.component';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { GeneralStickerComponent } from './components/general-sticker/general-sticker.component';

import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';
import { StadisticStickerComponent } from './components/stadistic-sticker/stadistic-sticker.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    
    ProductPageComponent,
    ClientsPageComponent,
    OrdersPageComponent,
    DashboardPageComponent,
    ProductCardComponent,
    OrderTableComponent,
    ClientTableComponent,
    GeneralStickerComponent,
    StadisticStickerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralSharedModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule {}
