import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-title',
  template: `
    <div matDialogTitle>
      Edit title
    </div>
    <div matDialogContent>
      <mat-form-field>
        <mat-label>Title</mat-label>
        <input
        matInput
        #input
        maxlength="15"
        type="text"
        autocomplete="off"
        [(ngModel)]="data.text"
      />
      <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button
        mat-stroked-button
        (click)="close()"
      >
        Cancel
      </button>
      <button
        mat-raised-button
        [mat-dialog-close]="data.text"
        [disabled]="!data.text"
      >
        Actualize
      </button>

    </div>
  `,
  styles: [
  ]
})
export class EditTitleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTitleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  close() {
    return this.dialogRef.close()
  }


}
