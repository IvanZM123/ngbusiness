import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';

import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [
    CreatePageComponent,
    ListPageComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule {}
