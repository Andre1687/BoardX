import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  constructor() { }
  @Input() element: any

  @Input() index!: number

  @Output() checkChange = new EventEmitter<number>()

  @Output() deleteItem = new EventEmitter<number>()
  @Output() updateItem = new EventEmitter<number>()

  ngOnInit(): void {
    console.log(this.element)
  }

  onCheckChange() {
    this.checkChange.emit()
  }

  deleteElement() {
    this.deleteItem.emit(this.index)
  }

  editElement() {
    this.updateItem.emit(this.index)

  }

}
