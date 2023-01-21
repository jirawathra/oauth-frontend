import { IUserAccount } from "../../../../app-shared/services/account.service";

export interface AuthSidebarInterfaceComponent {
  AppURL: any;
  AuthURL: any;
  // userLogin: any;
  userLogin: IUserAccount;
}
