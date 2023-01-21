import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginClass } from '../../components/login/login.class';
import { environment } from '../../../environments/environment.dev';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private _http: HttpClient) {}

  loginURL = '/api/login';
  logoutURL = '/api/logout';
  getUserURL = '/api/user';

  // on login section
  onLogin(model: LoginClass): Observable<any> {
    let body = {
      email: model.email,
      password: model.password,
    };
    // console.log(body);
    return this._http.post<any>(environment.apiUrl + this.loginURL, body);
  }

  // get user login section
  getUserLogin(accessToken: string | null): Observable<any> {
    // console.log(accessToken);
    // console.log(environment.apiUrl + this.getUserURL);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });
    return this._http.get(environment.apiUrl + this.getUserURL, {headers: headers});
    // return this._http.get<IUserAccount>(environment.apiUrl + this.getUserURL, {headers: headers});
  }
}

export interface IUserAccount {
  id?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  position?: string;
  avatar?: string;
  roleId?: number;
  created?: Date;
  updated?: Date;
}

export enum IRoleAccount {
  Member,
  Employee,
  Admin,
}
