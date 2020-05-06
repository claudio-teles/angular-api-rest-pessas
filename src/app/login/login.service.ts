import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  fazerLogin(urlLogin: String, login: Login): Observable<Response> {
    return this.http.put<Response>(urlLogin.toString(), login)
  }

}
