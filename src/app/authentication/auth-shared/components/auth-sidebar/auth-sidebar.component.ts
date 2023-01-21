import { Component } from '@angular/core';
import { AuthSidebarInterfaceComponent } from './auth-sidebar.interface';

import {
  AccountService,
  IUserAccount,
} from '../../../../app-shared/services/account.service';
import { AuthenticationService } from '../../../../app-shared/services/authentication.service';

import { AlertService } from '../../../../app-shared/services/alert.service';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css'],
})
export class AuthSidebarComponent implements AuthSidebarInterfaceComponent {
  AppURL: any;
  AuthURL: any;
  // userLogin: any = '';
  userLogin!: IUserAccount;

  constructor(
    private _account: AccountService,
    private _authen: AuthenticationService,
    private _alert: AlertService
  ) {
    this.initialLoadUserData();
  }

  private initialLoadUserData() {
    // define userLogin
    this.userLogin = {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
    };

    try {
      this._account
        .getUserLogin(this._authen.getAuthenticated())
        .pipe(
          catchError((err) => {
            console.log('rethrowing error', err);
            this._alert.notify(
              'fa fa-lg fa-times-circle',
              'ผิดพลาด',
              err.error.message,
              'pastel-danger'
            );
            return throwError(() => new Error(err.message));
          }),
          catchError((err) => {
            console.log('caught rethrow error');
            return throwError(() => new Error(err.message));
            // return of('Http Call Failed');
          })
        )
        .subscribe({
          next: (userLogin) => {
            if (userLogin) {
              // assign retrieved value from backend Auth::user()
              this.userLogin = userLogin;
            } else {
              this._alert.notify(
                'fa fa-lg fa-times-circle',
                'ผิดพลาด',
                'ไม่สามารถดึงข้อมูลผู้ใช้งานได้',
                'pastel-danger'
              );
            }
            // console.log(userLogin);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } catch (err) {
      console.log(err);
    }
  }
}
