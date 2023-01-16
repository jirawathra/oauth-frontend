import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from './auth-shared/auth-shared.module';
import {
  AuthenticationRoutingComponent,
  AuthenticationRoutingModule,
} from './authentication-routing.module';

@NgModule({
  declarations: [AuthenticationRoutingComponent],
  imports: [CommonModule, AuthenticationRoutingModule, AuthSharedModule],
})
export class AuthenticationModule {}
