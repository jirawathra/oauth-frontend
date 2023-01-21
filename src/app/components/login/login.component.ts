import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../app-shared/services/alert.service';
import { AccountService } from '../../app-shared/services/account.service';
import { AuthenticationService } from '../../app-shared/services/authentication.service';
import { Router } from '@angular/router';
import { AppURL } from '../../app.url';
import { AuthURL } from '../../authentication/authentication.url';
import { LoginInterfaceComponent } from './login.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, of, throwError } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements LoginInterfaceComponent, OnInit {
  constructor(
    private _fb: FormBuilder,
    private _alert: AlertService,
    private _account: AccountService,
    private _authen: AuthenticationService,
    private _router: Router
  ) {
    this.initialForm();
  }

  AppURL: any = AppURL;
  AuthURL: any = AuthURL;
  retrieveData: any;

  form!: FormGroup<any>;
  onSubmit(): void {
    // console.log(this.form.value);

    try {
      this._account
        .onLogin(this.form.value)
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
          next: (res) => {
            console.log(res);
            this.retrieveData = res;

            // set local stoarge
            this._authen.setAuthenticated(
              this.retrieveData.data.access_token['accessToken']
            );

            // redirect to dashboard
            this._router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);

            // alert notification
            this._alert.notify(
              'fa fa-lg fa-check-circle',
              'สำเร็จ',
              this.retrieveData.data.message,
              'pastel-success'
            );
          },
          error: (err) => {
            console.log('error occured in observable!', err);
          },
        });
    } catch (err) {
      console.log(err);
    }
    // this._account.onLogin(this.form.value).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (e) => {
    //     console.log(e.error.message);
    //     this._alert.notify(
    //       'fa fa-lg fa-times-circle',
    //       'Error',
    //       e.error.message,
    //       'pastel-danger'
    //     );
    //   },
    //   complete: () => {
    //     console.log('done');
    //   },
    // });

    // this._account.onLogin(this.form.value).subscribe(
    //   (res) => {
    //     this.retrieveData = res;
    //     console.log('Check this: ' + this.retrieveData);

    //     if (this.retrieveData.data.status == 1) {
    //       // set local stoarge
    //       this._authen.setAuthenticated(
    //         this.retrieveData.data.access_token['accessToken']
    //       );

    //       // redirect to dashboard
    //       this._router.navigate(['/', AppURL.Authen, AuthURL.Dashboard]);

    //       // alert notification
    //       this._alert.notify(
    //         'fa fa-lg fa-check-circle',
    //         'Success',
    //         this.retrieveData.data.message,
    //         'pastel-success'
    //       );
    //     } else {
    //       this._alert.notify(
    //         'fa fa-lg fa-times-circle',
    //         'Error',
    //         this.retrieveData.message,
    //         'pastel-danger'
    //       );
    //     }

    //     // console.log(res.data.user['email'], res.data.access_token['accessToken']);
    //     // console.log(res.user['email'], res.access_token['accessToken']);
    //   });
    // this._account.onLogin(this.form.value);
  }

  ngOnInit(): void {
    this.loadForgetPassword();
  }

  // ********** getter function section **********
  // email getter section
  get email() {
    return this.form.get('email');
  }

  // password getter section
  get password() {
    return this.form.get('password');
  }

  // ********** validation function section **********
  // email validation section
  validateEmail() {
    if (this.email?.valid) return;
    if (this.email?.value == '') return this._alert.emailEmptyTh();
    if (this.email?.invalid) return this._alert.emailInvalidTh();
  }

  // password validation section
  validatePassword() {
    if (this.password?.valid) return;
    if (this.password?.value == '') return this._alert.passwordEmptyTh();
    if (this.password?.invalid) return this._alert.passwordInvalidTh();
  }

  // forget password page section
  private loadForgetPassword() {
    // Login Page Flipbox control
    $('.login-content [data-toggle="flip"]').click(function () {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }

  // intial form section
  private initialForm() {
    this.form = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
