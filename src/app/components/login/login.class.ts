import { LoginInterface } from './login.interface';

export class LoginClass implements LoginInterface {
  public email!: string;
  public password!: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
