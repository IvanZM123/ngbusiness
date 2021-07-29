import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';

import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditProductPageComponent } from './pages/edit-product-page/edit-product-page.component';

@NgModule({
  declarations: [
    ListProductsPageComponent,
    CreateProductPageComponent,
    ProductCardComponent,
    ProductFormComponent,
    EditProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    GeneralSharedModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule {}
