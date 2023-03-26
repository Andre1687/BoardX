import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // User info
  usrProfile: any

  // Iport for authentication.
  // Import the router to navigate to other paths.
  constructor(private rtr: Router, private afAuth: AngularFireAuth) { }

  // On mount
  ngOnInit(): void {
    // Subscribe to the state of the user.
    this.afAuth.user.subscribe(user => { // Is executed each time the user changes in state.
      if (!user) { // If there is no user.
        // Navigates to the user.
        return this.rtr.navigate(['login'])
      }
      // If there is a user, we save it.
      console.log(user)
      return this.usrProfile = user
    })
  }


  // To logOut.
  signOut () {
    return this.afAuth.signOut()
  }

}
