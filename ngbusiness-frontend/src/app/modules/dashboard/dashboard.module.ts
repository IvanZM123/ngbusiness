import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { GeneralSharedModule } from 'src/app/core/shared/general-shared.module';

import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    GeneralSharedModule
  ]
})
export class DashboardModule {}
