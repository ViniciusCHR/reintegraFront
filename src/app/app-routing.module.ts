import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastro/cadastro.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PostagensComponent } from './postagens/postagens.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'cadastro', component: CadastrarComponent},
{path: 'postagens', component: PostagensComponent},
{path: 'sobrenos', component: SobreNosComponent},
{path: 'tema', component: TemaComponent},
{path: 'inicio', component: InicioComponent},
{path: 'menu', component: MenuComponent},
{path: 'rodape', component: RodapeComponent},

{path: 'tema-edit/:id', component: TemaEditComponent},
{path: 'tema-delete/:id', component: TemaDeleteComponent},
{path: 'postagem-delete/:id', component: PostagemDeleteComponent},
{path: 'postagem-edit/:id', component: PostagemEditComponent},
{path: 'user-edit/:id', component: UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
