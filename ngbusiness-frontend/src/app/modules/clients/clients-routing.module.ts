import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ClientListPageComponent
      },
      {
        path: "create",
        component: CreateClientPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
