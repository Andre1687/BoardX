import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddElementComponent } from '../dialogs/add-element.component';
import { DeleteTableComponent } from '../dialogs/delete-table.component';
import { TableService } from '../table.service';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {

  constructor(public dialog: MatDialog, private tableService: TableService) { }

  @Input() list: any

  ngOnInit(): void {
  }

  addElement() {
    const dialogRef = this.dialog.open(AddElementComponent, {
      data: {}
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.tableService.addElementTable(this.list.docRef!, res)
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.elements!, event.previousIndex, event.currentIndex)
    this.tableService.actualizeArrayElements(this.list.docRef!, this.list.elements!)
  }


  editTitle() {

  }

  deleteTable() {
    const dialogRef = this.dialog.open(DeleteTableComponent, {
      data: this.list.title
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.tableService.deleteTable(this.list.docRef!)
      }
    })
  }



}
