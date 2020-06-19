import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'body',
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint: string = '/authenticate'

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.endpoint, { username, password }, httpOptions)
  }
}
