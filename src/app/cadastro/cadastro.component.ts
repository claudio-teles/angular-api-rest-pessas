import { Component, OnInit } from '@angular/core';
import { CadastroService } from './cadastro.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {

  private urlCadastro: string = 'https://back-end-pessoas.herokuapp.com/usuario'

  value: Date = new Date(new Date().toUTCString())

  ano: String

  mes: String
  dia: String

  cadastro: Cadastro = {
    nome: '',
    senha: '',
    ativo: false,
    regra: 'usuario',
    sexo: '',
    email: '',
    dataDeNascimento: '',
    naturalidade: '',
    nacionalidade: '',
    cpf: ''
  }

  constructor(private cadastroService: CadastroService, private messageService: MessageService, private router: Router) {}

  showSuccess() {
    this.messageService.add({key: 'tl', life: 5000, severity:'success', summary: 'Resposta do Servidor', detail:'Usuário cadastrado com sucesso!'});
  }

  showError() {
    this.messageService.add({key: 'tl', life: 5000,  severity:'error', summary: 'Resposta do Servidor', detail:'Erro, o usuário não foi cadastrado.'});
  }

  irParaLogin = () => {
    this.router.navigateByUrl('/login')
  }

  cadastrar = () => {

    this.ano = this.value.getFullYear().toString();
    
    if (this.value.getMonth() < 10) {
      this.mes = ('0'+this.value.getMonth().toString());
    } else {
      this.mes = this.value.getMonth().toString();
    }

    this.dia = this.value.getDate().toString();

    this.cadastro.dataDeNascimento = this.ano+'-'+this.mes+'-'+this.dia;

    this.cadastroService.fazerCadastro(this.urlCadastro.toString(), this.cadastro).subscribe(
      resposta => {
        if (resposta.nome != '') {
          console.log(resposta)
          this.showSuccess()
          window.setInterval(this.irParaLogin, 3000)
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
