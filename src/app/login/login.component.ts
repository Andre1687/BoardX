import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Iport for authentication.
  // Import the router to navigate to other paths.
  constructor(private rtr: Router, private afAuth: AngularFireAuth) { }

  // On mount.
  ngOnInit(): void {
    // Subscribes to the state of the user.
    this.afAuth.user.subscribe(user => {
      // Navigates to the profile if there is a user.
      if (user) {
        this.rtr.navigate(['profile'])
      }
    })
  }

}
