import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PessoaDetalheComponent } from './login/pessoa/pessoa-detalhe/pessoa-detalhe.component';
import { AtualizarPessoaComponent } from './login/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { ListaPessoasComponent } from './login/pessoa/lista-pessoas/lista-pessoas.component';
import { CriarChatComponent } from './login/chat/criar-chat/criar-chat.component';
import { ConsultaCpfComponent } from './login/pessoa/consulta-cpf/consulta-cpf.component';


const routes: Routes = [
  {path: 'usuario', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'consulta-por-cpf', component: ConsultaCpfComponent},
  {path: 'atualizar/usuario/:id', component: AtualizarPessoaComponent},
  {path: 'usuario/:id', component: PessoaDetalheComponent},
  {path: 'usuarios', component: ListaPessoasComponent},
  {path: 'criar-chat', component: CriarChatComponent},
  {path: '', redirectTo: 'AppComponent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
