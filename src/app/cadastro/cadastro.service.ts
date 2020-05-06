import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) {}

  fazerCadastro = (urlCadastro: string, cadastro: Cadastro): Observable<Cadastro> => {
    return this.http.post<Cadastro>(urlCadastro.toString(), cadastro)
  }

}
