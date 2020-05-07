import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class CriarChatService {

  constructor(private http: HttpClient) {}

  criarChat = (urlEmail: string, email: Email): Observable<Email> => {
    return this.http.post<Email>(urlEmail.toString(), email)
  }

  enviarMensagem = (urlEnvio: string, mensagem: Email): Observable<Email> => {
    return this.http.post<Email>(urlEnvio.toString(), mensagem)
  }

  listarMensagens = (urlMensagens: string): Observable<{}> => {
    return this.http.get<{}>(urlMensagens.toString())
  }

}
