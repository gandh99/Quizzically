import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getAccessToken(): string {
    return localStorage.getItem('accessToken')
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('accessToken') !== null
  }
}
