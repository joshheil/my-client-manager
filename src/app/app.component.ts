import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Credentials } from './credentials.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  credentials: Credentials;
  loginError: boolean;

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.credentials = new Credentials();
    this.loginError = false;
  }

  typeytypetype() {
    this.loginError = false;
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.credentials.username,this.credentials.password)
    .catch(() => this.loginError = true);
    this.credentials = new Credentials();
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
