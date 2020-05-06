import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mensagem = 'Bem vindo! Cadastre - se ou faça o login.';
  home: MenuItem = {icon: 'pi pi-home', url: '/'};
  private itens: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.itens = [
      {label:'Cadastro', url: '/usuario'},
      {label:'Login', url: '/login'},
      {label: 'Pesquisar Usuário Por CPF', url: '/consulta-por-cpf'}
    ]
  }
}
