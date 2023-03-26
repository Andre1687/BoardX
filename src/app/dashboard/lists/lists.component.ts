import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { AddListComponent } from '../dialogs/add-list.component';
import { List } from '../models.interface';
import { TableService } from '../table.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: any[] = [

  ]

  constructor(public dialog: MatDialog,
    private afAuth: AngularFireAuth,
    private tableService: TableService) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user=>{
      if(user){
       this.tableService.getTables(user.uid).onSnapshot(snap=>{
        this.lists = snap.docs.map(doc=>{
          return {...doc.data(), docRef: doc.id}
        })
      })
    }
  })
}

  add() {
    const dialogRef = this.dialog.open(AddListComponent,{
      data: {}
  })

  dialogRef.afterClosed().subscribe(res=>{
    if(res) {
      this.tableService.addTable({
        title: res.text,
        elements: [],
        index: this.lists.length + 1
      })
    }
  }) 

  }


    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.lists, event.previousIndex, event.currentIndex)
      this.actualizeIndexes()
      this.tableService.actualizeIndexes(this.lists)

    }

    actualizeIndexes() {
      for(let i = 0; i < this.lists.length; i++)
      this.lists[i].index = i + 1
    }

}
