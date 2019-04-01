import {NgModule} from "@angular/core";

import { CommonModule } from '@angular/common';

import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionModule,MatChipsModule

} from '@angular/material';

@NgModule({

  imports: [

  CommonModule,

  MatToolbarModule,

  MatButtonModule,

  MatCardModule,

  MatInputModule,

  MatDialogModule,

  MatTableModule,

  MatMenuModule,

  MatIconModule,

  MatProgressSpinnerModule,
  MatExpansionModule,
  MatChipsModule

  ],

  exports: [

  CommonModule,

   MatToolbarModule,

   MatButtonModule,

   MatCardModule,

   MatInputModule,

   MatDialogModule,

   MatTableModule,

   MatMenuModule,

   MatIconModule,

   MatProgressSpinnerModule,
   MatExpansionModule,
   MatChipsModule

   ],

})

export class CustomMaterialModule { }
