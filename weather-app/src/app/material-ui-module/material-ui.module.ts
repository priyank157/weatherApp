import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule,
  MatGridListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class MaterialUiModule { }
