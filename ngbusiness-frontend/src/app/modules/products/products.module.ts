import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';

@NgModule({
  declarations: [
    ListProductsPageComponent,
    CreateProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
