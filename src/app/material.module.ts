import {NgModule} from "@angular/core";

import { CommonModule } from '@angular/common';

import {

  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,

  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatExpansionModule,MatChipsModule,MatDividerModule,MatListModule


} from '@angular/material';


import {MatSnackBarModule} from '@angular/material/snack-bar';
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
  MatChipsModule,
  MatSnackBarModule,
  MatDividerModule,
  MatListModule

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
   MatChipsModule,
   MatSnackBarModule,
   MatDividerModule,
   MatListModule

   ],

})

export class CustomMaterialModule { }
