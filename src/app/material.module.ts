import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes Importados
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports:[
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
})
export class MaterialModule { }
