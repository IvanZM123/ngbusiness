import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';

import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';

@NgModule({
  declarations: [
    CreatePageComponent,
    ListPageComponent,
    ClientListPageComponent,
    CreateClientPageComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule {}
