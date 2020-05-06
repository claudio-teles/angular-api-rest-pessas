import { Component, OnInit } from '@angular/core';
//
import { MessageService } from 'primeng/api';
import { ConsultaCpfService } from './consulta-cpf.service';

@Component({
  selector: 'app-consulta-cpf',
  templateUrl: './consulta-cpf.component.html',
  styleUrls: ['./consulta-cpf.component.css'],
  providers: [MessageService]
})
export class ConsultaCpfComponent implements OnInit {

  private urlCpf: string = 'https://back-end-pessoas.herokuapp.com/usuario/cpf'

  usuarios: Array<{}> = []

  consultaCpf: {} = {
    cpf: ''
  }

  constructor(private messageService: MessageService, private cpfService: ConsultaCpfService) {}

  showSuccess() {
    this.messageService.add({key: 'tl', life: 5000, severity:'success', summary: 'Resposta do Servidor', detail:'O usuário foi localizado!'});
  }

  showError() {
    this.messageService.add({key: 'tl', life: 5000,  severity:'error', summary: 'Resposta do Servidor', detail:'O usuário não foi localizado!'});
  }

  pesquisar = () => {
    this.cpfService.pesquisarCpf(this.urlCpf.toString(), this.consultaCpf).subscribe(
      resposta => {
        if (resposta != {}) {
          this.usuarios = []
          this.usuarios.push(resposta)
          this.showSuccess()
        }
      },
      erro => {
        if (erro.status == 400 || erro.status == 500) {
          this.showError()
        }
      }
    )
  }

  ngOnInit() {}

}
