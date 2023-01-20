import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  // local storage initialize
  private accessKey = 'accessToken';

  // Set Access Token in Browser Memory, disappeared when clear cache
  setAuthenticated(accessToken: string): void {
    localStorage.setItem(this.accessKey, accessToken);
  }

  // Get access token from browser memory
  getAuthenticated(): string | null {
    return localStorage.getItem(this.accessKey);
  }

  // Remove access token value from browser memory
  removeAuthenticated(): void {
    localStorage.removeItem(this.accessKey);
  }
}
