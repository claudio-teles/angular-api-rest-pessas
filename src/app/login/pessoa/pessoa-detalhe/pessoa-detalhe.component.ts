import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Message, ConfirmationService } from 'primeng/api';

import { PessoaDetalheService } from './pessoa-detalhe.service';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css'],
  providers: [ConfirmationService]
})
export class PessoaDetalheComponent implements OnInit {

  msgs: Message[] = [];

  private urlPessoa: String = 'https://back-end-pessoas.herokuapp.com/usuario/'
/* 
  pessoa: Pessoa = {
    idUsuario: 0,
    nome: '',
    senha: '',
    ativo: false,
    regra: '',
    sexo: '',
    email: '',
    dataDeNascimento: '',
    naturalidade: '',
    nacionalidade: '',
    cpf: '',
    dataDeCadastro: '',
    dataDeAtualizacao: '',
  } */
  
  statusPessoas = {}
  cpSp = {}

  _pessoa = {}

  id: string

  constructor(private pessoaService: PessoaDetalheService, private route: ActivatedRoute, private router: Router, private confirmationService: ConfirmationService) {}

  deletar = () => {
    this.route.paramMap.subscribe(
      parametros => {
        this.id = parametros.get('id')
        this.urlPessoa += parametros.get('id')
      }
    )
    this.pessoaService.deletarConta(this.urlPessoa.toString()).subscribe(
      resposta => console.log(resposta)
    )
  }

  confirmarDeletar = () => {
    this.confirmationService.confirm({
        message: 'Você deseja mesmo deletar sua conta de usuário?',
        header: 'Confirmação de deletar conta',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deletar()
          this.msgs = [{severity:'info', summary:'Confiramado,', detail:'Sua conta foi deletada!'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Cancelado,', detail:'Você desistiu de deletar sua conta!'}];
        }
    });
  }

  irParaAtualizacao = () => {
    this.router.navigateByUrl('/atualizar/usuario/'+this.id.toString(), {state: this._pessoa})
  }

  irParaListaPessoas = () => {
    this.router.navigate(['/usuarios'], {queryParams: {id: this._pessoa['idUsuario'], }})
  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      parametros => {
        this.id = parametros.get('id')
        this.urlPessoa += parametros.get('id')
      }
    )

    this.pessoaService.carregarDetalheUsuarioId(this.urlPessoa.toString()).subscribe(
      resposta => {
        this._pessoa = resposta
      }
    )

    this.statusPessoas = history.state

  }

}
