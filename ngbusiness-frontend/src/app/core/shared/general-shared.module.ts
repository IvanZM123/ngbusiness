import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatMenuModule } from "@angular/material/menu";

import { ClientTableComponent } from '../components/client-table/client-table.component';
import { OrderTableComponent } from '../components/order-table/order-table.component';
import { BasicStatsCardComponent } from '../components/basic-stats-card/basic-stats-card.component';

@NgModule({
  declarations: [
    ClientTableComponent,
    OrderTableComponent,
    BasicStatsCardComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  exports: [
    ClientTableComponent,
    OrderTableComponent,
    BasicStatsCardComponent,

    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule
  ],
})
export class GeneralSharedModule {}
