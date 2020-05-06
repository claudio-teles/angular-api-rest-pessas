import { Component, OnInit } from '@angular/core';
import { ListaPesssoasService } from './lista-pesssoas.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  urlPessoas: string = 'https://back-end-pessoas.herokuapp.com/usuarios?id='
  id: string
  pessoas: Array<any> = []

  constructor(private listaPessoaService: ListaPesssoasService, private roteador: Router, private rotaAtiva: ActivatedRoute) {}

  irParaCriarChat = (pessoa: {}) => {
    this.roteador.navigateByUrl('/criar-chat', {state: pessoa})
  }

  ngOnInit() {
    this.rotaAtiva.queryParams.subscribe(
      parametrosDeConsulta => {
        this.id = parametrosDeConsulta['id']
      }
    )
    this.listaPessoaService.listarTodasAsPessoas(this.urlPessoas+this.id).subscribe(
      resposta => {
        this.pessoas = resposta
      }
    )
  }

}
