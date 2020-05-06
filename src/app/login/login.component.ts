import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private urlLogin: string = 'https://back-end-pessoas.herokuapp.com/login'

  msgs: Message[] = [];

  login: Login = {
    id: 0,
    nome: '',
    senha: '',
    ativo: false
  }

  ativo: boolean

  constructor(private loginService: LoginService, private router: Router) {}

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Ok!', detail:'Login feito com sucesso!'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Erro!', detail:'Nome ou senha incorretos!'});
  }

  redirecionarHomePage = () => {
    //window.location.href = '/'
    this.router.navigateByUrl('/usuario/'+(this.login.id).toString(), {state: this.login})
  }

  enviarLogin = () => {
    this.loginService.fazerLogin(this.urlLogin, this.login).subscribe(
      resposta => {
        this.login.id = resposta['idUsuario']
        this.login.ativo = resposta['ativo']
        this.ativo = resposta['ativo']
        console.log(this.ativo)
        if (resposta['ativo'] == true) {
          this.showSuccess()
          window.setTimeout(this.redirecionarHomePage, 2000)
        }
      },
      erro => {
        if (erro.status == 400 || erro.status == 500) {
          this.showError()
        }
      }
    )
  }

  ngOnInit() {console.log('Ativo: ', this.ativo)}

}
