import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {


  // Importing dependency to authenticate the user.
  constructor(private afAuth: AngularFireAuth) { }

  // Listening for click event of the 'father' of this dependency.
  // Case of use: <button GoogleSignInDirective></buttton>.
  @HostListener('click')
  onClick() { // Funcion to manage the event.
    // Start of popup session with Google through Firebase.
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

}
