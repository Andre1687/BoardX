import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-element',
  template: `
    <div matDialogTitle>
      Add element
    </div>

    <div matDialogContent class="content">
      <mat-form-field appearance="outline">
        <mat-label>Type</mat-label>
        <mat-select [(ngModel)]="data.type" (valueChange)="onSelectChange()">
          <mat-option value="check">Checkbox</mat-option>
          <mat-option value="text">Text</mat-option>
          <mat-option value="prog">Progress</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-slider
        [min]="0"
        [max]="100"
        [step]="1"
        [thumbLabel]="''+ data.prog"
        *ngIf="data.type == 'prog'"
        [(ngModel)]="data.prog"
      >
      </mat-slider>

      <mat-form-field appearance="outline">
        <mat-label>Text</mat-label>
        <input
          [disabled]="!data.type"
          matInput
          #input
          maxlength="15"
          type="text"
          autocomplete="off"
          (keydown.enter)="close(data)"
          [(ngModel)]="data.text"
        />
        <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>


      <mat-button-toggle-group
        class="btnGroup"
        [(ngModel)]="data.color"
        *ngIf="data.type"
      >
        <mat-button-toggle
          *ngFor="let color of colors"
          [value]="color"
        >
        <div
          class="color"
          [style]="'--colorVar: ' + color + ';'"
        >

        </div>
        </mat-button-toggle>
      </mat-button-toggle-group>

      <p>❗Text color black by default</p>
    </div>

    <div matDialogActions>
      <button
        mat-stroked-button
        [color]="'warn'"
        (click)="close()"
      >
        Cancel
      </button>
      <button
        mat-raised-button
        [mat-dialog-close]="data"
        [disabled]="!data.text"
      >
        Add
      </button>
    </div>
  `,
  styles: [`
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .btnGroup {
        margin-block: 1rem
      }

      .color {
        width: 1rem;
        aspect-ratio: 1;
        margin: 0.5rem;
        border-radius: 50%;
        background-color: var(--colorVar);
      }
    `
  ]
})
export class AddElementComponent implements OnInit {

  colors: string[] = ['purple', 'blue', 'green', 'yellow', 'red', 'gray']

  constructor(
    public dialogRef: MatDialogRef<AddElementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  onSelectChange() {
    delete this.data.prog
  }


  ngOnInit(): void {
  }

  close(args?: any) {
    if (!args) return this.dialogRef.close()
    return this.dialogRef.close(args)
  }

}
