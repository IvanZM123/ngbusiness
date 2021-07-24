import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ClientTableComponent } from '../components/client-table/client-table.component';

@NgModule({
  declarations: [
    ClientTableComponent
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    ClientTableComponent,

    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class GeneralSharedModule {}
