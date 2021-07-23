import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "clients",
    loadChildren: () => import("./modules/clients/clients.module").then(module => module.ClientsModule)
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products/products.module").then(module => module.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
