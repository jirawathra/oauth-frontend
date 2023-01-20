import { FormGroup } from '@angular/forms';

export interface LoginInterfaceComponent {
  form: FormGroup;
  onSubmit(): void;
  AppURL: any;
  AuthURL: any;
  retrieveData: any;
}
export interface LoginInterface {
  email: string;
  password: string;
}
