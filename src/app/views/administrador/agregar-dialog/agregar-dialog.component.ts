import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PsicologoNuevo } from 'src/app/models/psicologoNuevo';

@Component({
  selector: 'app-agregar-dialog',
  templateUrl: './agregar-dialog.component.html',
  styleUrls: ['./agregar-dialog.component.css']
})
export class AgregarDialogComponent  {

  constructor(public dialogRef: MatDialogRef<AgregarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PsicologoNuevo) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
