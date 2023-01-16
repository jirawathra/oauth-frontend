import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthURL } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SystemSettingComponent } from './components/system-setting/system-setting.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
const routes: Routes = [
  { path: '', redirectTo: AuthURL.Dashboard, pathMatch: 'full' },
  { path: AuthURL.Dashboard, component: DashboardComponent },
  { path: AuthURL.SystemSetting, component: SystemSettingComponent },
  { path: AuthURL.UserProfile, component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
export const AuthenticationRoutingComponent = [
  DashboardComponent,
  SystemSettingComponent,
  UserProfileComponent,
];
