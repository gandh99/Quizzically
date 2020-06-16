import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url: string = 'http://localhost:8000/register'

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.url, { username, password }, httpOptions)
  }
}
