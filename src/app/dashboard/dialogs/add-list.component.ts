import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list',
  template: `
    <div matDialogTitle>
      Add new list
    </div>
    <div matDialogContent>
      <mat-form-field>
        <mat-label>Title</mat-label>
        <input matInput #input maxlength="15" type="text" autocomplete="off" [(ngModel)]="data.text">
        <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button mat-stroked-button [color]="'warn'" (click)="close()">Cancel</button>
      <button mat-raised-button [mat-dialog-close]="data">Add</button>
    </div>
  `,
  styles: [`

  `
  ]
})
export class AddListComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }


  close() {
    this.dialogRef.close()
  }



}
