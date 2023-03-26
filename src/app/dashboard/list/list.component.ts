import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddElementComponent } from '../dialogs/add-element.component';
import { DeleteTableComponent } from '../dialogs/delete-table.component';
import { EditTitleComponent } from '../dialogs/edit-title.component';
import { EditComponent } from '../dialogs/edit.component';
import { List, Element } from '../models.interface';
import { TableService } from '../table.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list!: List

  constructor(private tableService: TableService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
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


  deleteElement(index: number) {
    this.list.elements?.splice(index, 1)
    this.tableService.actualizeArrayElements(this.list.docRef!, this.list.elements!)

  }

  editElement(index: number) {
    const dialogRef = this.dialog.open(EditComponent, {
      data: {
        ...this.list.elements![index]
      }
    })

    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.list.elements?.splice(index, 1, res)
        this.tableService.actualizeArrayElements(this.list.docRef!, this.list.elements!)
      }
    })
  }

  editTitle() {
    const dialogRef = this.dialog.open(EditTitleComponent, {
      data: {},
    })

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.list.title = res
        this.tableService.actualizaTitle(this.list.docRef!, res)
      }
    })
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.elements!, event.previousIndex, event.currentIndex)
    this.tableService.actualizeArrayElements(this.list.docRef!, this.list.elements!)
  }

  checkChange() {
    this.tableService.actualizeArrayElements(this.list.docRef!, this.list.elements!)

  }


}
