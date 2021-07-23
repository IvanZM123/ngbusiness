import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/dashboard/dashboard.module").then(module => module.DashboardModule)
  },
  {
    path: "clients",
    loadChildren: () => import("./modules/clients/clients.module").then(module => module.ClientsModule)
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products/products.module").then(module => module.ProductsModule)
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
