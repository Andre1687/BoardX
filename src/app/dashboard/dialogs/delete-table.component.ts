import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-table',
  template: `
    <div matDialogTitle>
      Remove Table {{title}}
    </div>
    <div matDialogActions>
      <button mat-stroked-button (click)="close()">Cancel</button>
      <button mat-raised-button [color]="'warn'" [mat-dialog-close]="true">Delete</button>
    </div>
  `,
  styles: [
  ]
})
export class DeleteTableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTableComponent>,
    @Inject(MAT_DIALOG_DATA) public title: string
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }


}
