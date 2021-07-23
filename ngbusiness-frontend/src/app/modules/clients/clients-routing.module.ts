import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ListPageComponent
      },
      {
        path: "create",
        component: CreatePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
