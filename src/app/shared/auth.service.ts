import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface AuthObject {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly unsubscribe$ = new Subject<void>();

  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly _snackBar: MatSnackBar,
  ) {
    this.afAuth.user.pipe(takeUntil(this.unsubscribe$.asObservable()))
      .subscribe(user => {
        if (!user) {
          return;
        }
        console.log('user', user)
      }
      );
  }

  login(payload: AuthObject): void {
    this.afAuth.signInWithEmailAndPassword(payload.email, payload.password).then((result) => {
      if (result.user?.emailVerified !== true) {
        result.user?.sendEmailVerification();
        this._snackBar.open('Prosim verifikujte svuj email', undefined, { duration: 3000 })
        this.afAuth.signOut();
        return;
      }
      this._snackBar.open('Prihlaseni probehlo uspesne', undefined, { duration: 3000 })
    }).catch((error) => {
      this._snackBar.open('Nepovedlo se prihlasit chyba: ' + error.message, undefined, { duration: 5000 })
    })
  }

  register(payload: AuthObject): void {
    this.afAuth.createUserWithEmailAndPassword(payload.email, payload.password).then((result) => {
      console.log('result', result)
      result.user?.sendEmailVerification();
      this._snackBar.open('Registrace probehla uspesne', undefined, { duration: 3000 })
    }).catch((error) => {
      this._snackBar.open('Nepovedlo se registrovat chyba: ' + error.message, undefined, { duration: 5000 })
    })
  }

}
