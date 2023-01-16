import { Component } from '@angular/core';
import { AppURL } from '../../../../app.url';
import { AuthURL } from '../../../authentication.url';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent {
  AppURL = AppURL;
  AuthURL = AuthURL;
}
