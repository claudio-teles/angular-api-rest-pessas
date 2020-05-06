import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PessoaDetalheComponent } from './login/pessoa/pessoa-detalhe/pessoa-detalhe.component';
import { AtualizarPessoaComponent } from './login/pessoa/atualizar-pessoa/atualizar-pessoa.component';
import { ListaPessoasComponent } from './login/pessoa/lista-pessoas/lista-pessoas.component';
import { CriarChatComponent } from './login/chat/criar-chat/criar-chat.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ConsultaCpfComponent } from './login/pessoa/consulta-cpf/consulta-cpf.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    PessoaDetalheComponent,
    AtualizarPessoaComponent,
    ListaPessoasComponent,
    CriarChatComponent,
    ConsultaCpfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BreadcrumbModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,
    TableModule,
    ToastModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule
  ],
  providers: [], //ConfirmationService
  bootstrap: [AppComponent]
})
export class AppModule { }
