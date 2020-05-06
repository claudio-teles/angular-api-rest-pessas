import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtualizarPessoaService {

  constructor(private http: HttpClient) {}

  atualizarPessoa = (urlAtualizar: string, cadastro: {}): Observable<{}> => {
    return this.http.put<{}>(urlAtualizar.toString(), cadastro)
  }

}
