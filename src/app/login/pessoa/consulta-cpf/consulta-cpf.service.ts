import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCpfService {

  constructor(private http: HttpClient) {}


  pesquisarCpf = (urlCpf: string, consultaCpf: {}): Observable<{}> => {
    return this.http.post<{}>(urlCpf.toString(), consultaCpf)
  }

}
