import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { ListProductsPageComponent } from './pages/list-products-page/list-products-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ListProductsPageComponent
      },
      {
        path: "new",
        component: CreateProductPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
