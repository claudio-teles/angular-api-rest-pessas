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

  contato: {}

  email: Email = {
    email_remetente: '',
    email_destinatario: ''
  }

  chat: {}

  constructor(private messageService: MessageService, private criarChatService: CriarChatService) {}

  showSuccess() {
    this.messageService.add({key: 'tl', severity:'success', summary: 'Status da requisição: ', detail:'O chat foi criado!'});
  }

  showError() {
    this.messageService.add({key: 'tl', severity:'error', summary: 'Status da requisição: ', detail:'Erro ao criar o chat, verifique os campos!'});
  }

  criarUmChat = () => {
    this.criarChatService.criarChat(this.urlCriarChat.toString(), this.email).subscribe(
      resposta => {
        if (this.chat != {}) {
          this.criarUmChat()
          this.chat = resposta
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

  ngOnInit() {
    this.contato = history.state
    this.email.email_destinatario = this.contato['email']
  }

}
