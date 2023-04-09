import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Location } from '@angular/common'

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  showBtnContact = true;

  // Imports dependency to authenticate user
  constructor(public afAuth: AngularFireAuth, private _router: Location) { }

  ngOnInit(): void {
    this._router.onUrlChange(val => {
      let nom = val
      if (nom == '/contact') {
        this.showBtnContact = false;
      }
      else {
        this.showBtnContact = true;
      }
    })
  }


}
