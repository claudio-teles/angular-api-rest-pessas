import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaDetalheService {

  
  constructor(private http: HttpClient) {}

  carregarDetalheUsuarioId = (url: string): Observable<Pessoa> => {
    return this.http.get<Pessoa>(url)
  }

  deletarConta = (url: string) => {
    return this.http.delete<Pessoa>(url)
  }

}
