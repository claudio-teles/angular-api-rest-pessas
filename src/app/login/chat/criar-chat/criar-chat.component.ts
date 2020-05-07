import { Component, OnInit } from '@angular/core';
import { Email } from './email';
import { MessageService } from 'primeng/api';
import { CriarChatService } from './criar-chat.service';

@Component({
  selector: 'app-criar-chat',
  templateUrl: './criar-chat.component.html',
  styleUrls: ['./criar-chat.component.css'],
  providers: [MessageService]
})
export class CriarChatComponent implements OnInit {

  private urlCriarChat: string = 'https://back-end-pessoas.herokuapp.com/chat'
  id: string
  idChat: string = ''
  rem: string
  dest: string

  private urlCriarListarMensage: string = 'https://back-end-pessoas.herokuapp.com/chat?id=?1&idChat=?2&rem=?3&dest=?4'
  private urlEnviarMensagem: string = 'https://back-end-pessoas.herokuapp.com/mensagem'

  contato: {}

  email: Email = {
    email_remetente: '',
    email_destinatario: '',
    mensagem: ''
  }

  chat: {}

  listaMensagens: Array<any> = []

  constructor(private messageService: MessageService, private criarChatService: CriarChatService) {}

  showSuccess() {
    this.messageService.add({key: 'tl', severity:'success', summary: 'Status da requisição: ', detail:'O chat foi criado!'});
  }

  showError() {
    this.messageService.add({key: 'tl', severity:'error', summary: 'Status da requisição: ', detail:'Erro ao criar o chat, verifique os campos!'});
  }

  showSuccessSend() {
    this.messageService.add({key: 'tl', severity:'success', summary: 'Status da requisição: ', detail:'A mensagem foi enviada!'});
  }

  showErrorSend() {
    this.messageService.add({key: 'tl', severity:'error', summary: 'Status da requisição: ', detail:'Erro ao enviar a mensagem!'});
  }

  criarUmChat = () => {
    this.criarChatService.criarChat(this.urlCriarChat.toString(), this.email).subscribe(
      resposta => {
        this.chat = resposta
        if (this.chat != {}) {
          this.idChat = resposta['idChat']
          this.showSuccess()
        }
      },
      erro => {
        if (erro.status == 500) {
          this.showError()
        }
      }
    )    
  }

  enviarUmaMensagem = () => {
    this.criarChatService.enviarMensagem(this.urlEnviarMensagem.toString(), this.email).subscribe(
      resposta => {
        if (resposta['mensagem'] != null) {
          this.showSuccessSend()
        }
      },
      erro => {
        if (erro.status == 400 || erro.status == 500) {
          this.showErrorSend
        }
      }    
    )
  }

  listarMensagens = () => {
    var url1 = this.urlCriarListarMensage.replace('?1', this.id);
    var url2 = url1.replace('?2', this.idChat);
    var url3 = url2.replace('?3', this.rem);
    var urlFinal = url3.replace('?4', this.dest);
    
    this.criarChatService.listarMensagens(urlFinal.toString()).subscribe(
      resposta => {
        this.listaMensagens = []
        this.listaMensagens = resposta['mensagems']
        
        this.listaMensagens.forEach(mensagem => {
          console.log('Mensagem: ', mensagem)
        });

      }
    )

  }

  ngOnInit() {
    this.contato = history.state
    this.email.email_destinatario = this.contato['email']
  }

}
