import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';

import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';

import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';

@NgModule({
  declarations: [
    ClientListPageComponent,
    CreateClientPageComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    GeneralSharedModule
  ]
})
export class ClientsModule {}
