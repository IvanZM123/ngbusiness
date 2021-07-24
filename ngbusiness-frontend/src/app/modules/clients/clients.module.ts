import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';

import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';

import { ClientListPageComponent } from './pages/client-list-page/client-list-page.component';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

@NgModule({
  declarations: [
    ClientListPageComponent,
    CreateClientPageComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    GeneralSharedModule
  ]
})
export class ClientsModule {}
