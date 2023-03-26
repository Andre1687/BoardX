import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Variable to control opacity of the logos.
  angular = false
  material = false
  firebase = false


  // Array for home card
  // Card with selects
  // label - what is deisplaying on the template.
  // value - value utilized to identify each check.
  listData = [
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'Firebase & Firestore',
      value: 'firebase'
    },
    {
      label: 'SaSS & Material',
      value: 'material'
    },
  ]

  // Array for the second card in home
  diciplines = [
    'OOP single page application',
    'Mobile-first design',
    'Strong code documentation',
    'Firestore implementation',
  ]

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {

  }

  // Interchanges values of the variables to control the opacity of the logos.
  toggleImg(valueImg: string) {

    switch(valueImg){
      case 'firebase':
        this.firebase = !this.firebase
        break
      case 'angular':
        this.angular = !this.angular
        break
      case 'material':
        this.material = !this.material
        break
    }
  }

  // Function to order an array based
  // on an event "drop" in a "Drag and Drop" list style.
  drop(event: CdkDragDrop<string[]>) {
    // Function that comes with material.
    // arg1: The array to organize.
    // arg2: The index it started on or were the 'drag' began.
    // arg3: The index where it dropped or where the 'drop' was made.
    moveItemInArray(this.diciplines, event.previousIndex, event.currentIndex)
  }


}
