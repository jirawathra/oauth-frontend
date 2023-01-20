import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginClass } from '../../components/login/login.class';
import { environment } from '../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private _http: HttpClient) {}

  loginURL = '/api/login';
  logoutURL = '/api/logout';

  onLogin(model: LoginClass): Observable<any> {
    let body = {
      email: model.email,
      password: model.password,
    };
    // console.log(body);
    return this._http.post<any>(environment.apiUrl + this.loginURL, body);
  }
}
