import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeLayoutComponent } from './layout/home-layout.component';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardPageComponent,
      },
      {
        path: "products",
        component: ProductPageComponent,
      },
      {
        path: "orders",
        component: OrdersPageComponent,
      },
      {
        path: "clients",
        component: ClientsPageComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
