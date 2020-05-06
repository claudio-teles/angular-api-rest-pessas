import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaPesssoasService {

  constructor(private http: HttpClient) {}

  listarTodasAsPessoas = (urlLogin: String): Observable<any> => {
    return this.http.get<any>(urlLogin.toString())
  }

}
