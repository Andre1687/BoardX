import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  // Imports dependency to authenticate user
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
