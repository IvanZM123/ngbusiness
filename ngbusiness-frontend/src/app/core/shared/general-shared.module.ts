import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class GeneralSharedModule {}
