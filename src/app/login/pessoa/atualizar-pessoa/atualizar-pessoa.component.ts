import { Component, OnInit } from '@angular/core';
//
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AtualizarPessoaService } from './atualizar-pessoa.service';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css'],
  providers: [MessageService]
})
export class AtualizarPessoaComponent implements OnInit {

  private urlAtualizar: string = 'https://back-end-pessoas.herokuapp.com/usuario'

  constructor(private messageService: MessageService, private router: Router, private atualizarService: AtualizarPessoaService) {}

  pessoaAtualizar = {}

  showSuccess() {
    this.messageService.add({key: 'tl', life: 3000, severity:'success', summary: 'Resposta do Servidor', detail:'Usuário foi atualizado com sucesso!'});
  }

  showError() {
    this.messageService.add({key: 'tl', life: 3000,  severity:'error', summary: 'Resposta do Servidor', detail:'Erro, o usuário não foi atualizado.'});
  }

  irParaDetalheUsuario = () => {
    this.router.navigateByUrl('/usuario/'+this.pessoaAtualizar['idUsuario'])
  }

  atualizar = () => {
    this.atualizarService.atualizarPessoa(this.urlAtualizar.toString(), this.pessoaAtualizar).subscribe(
      resposta => {
        if (resposta['nome'] != '') {
          this.showSuccess()
          window.setInterval(this.irParaDetalheUsuario, 3000)
        }
      },
      erro => {
        if (erro.status == 400 || erro.status == 500) {
          this.showError()
        }
      }
    )
  }

  ngOnInit() {
    this.pessoaAtualizar = history.state
    console.log(this.pessoaAtualizar)
  }

}
