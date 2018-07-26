import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatCardModule, 
          MatFormFieldModule, MatInputModule, MatDividerModule,
        MatDialogModule } from "@angular/material";

@NgModule({
  imports: [
    MatDividerModule,
    MatButtonModule, MatToolbarModule, MatCardModule, 
    MatFormFieldModule, MatInputModule, MatDialogModule
  ],
  exports:[MatButtonModule, MatToolbarModule, MatCardModule, 
    MatFormFieldModule, MatInputModule, MatDividerModule, MatDialogModule]
})
export class MaterialModule { }
