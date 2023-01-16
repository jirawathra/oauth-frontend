import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
  { path: AppURL.Login, component: LoginComponent },
  { path: AppURL.Register, component: RegisterComponent },
  {
    path: AppURL.Authen,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const AppRoutingComponent = [LoginComponent, RegisterComponent];
