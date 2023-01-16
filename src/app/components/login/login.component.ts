import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../app.url';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  AppURL = AppURL;

  ngOnInit(): void {
    this.loadForgetPassword();
  }
  loadForgetPassword() {
    // Login Page Flipbox control
    $('.login-content [data-toggle="flip"]').click(function () {
      $('.login-box').toggleClass('flipped');
      return false;
    });
  }
}
