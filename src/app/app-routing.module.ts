import { NotfoundComponent } from './institucional/notfound/notfound.component';
import { PandemiaComponent } from './institucional/pandemia/pandemia.component';
import { ConteudosComponent } from './institucional/conteudos/conteudos.component';
import { PregacaoComponent } from './institucional/pregacao/pregacao.component';
import { PregacoesComponent } from './institucional/pregacoes/pregacoes.component';
import { ArtigoComponent } from './institucional/artigo/artigo.component';
import { ArtigosComponent } from './institucional/artigos/artigos.component';
import { PaginaComponent } from './institucional/pagina/pagina.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes } from "@angular/router";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'pagina/:name', component: PaginaComponent },
    { path: 'palavras', component: ArtigosComponent },
    { path: 'palavra/:id', component: ArtigoComponent },
    { path: 'pregacoes', component: PregacoesComponent },
    { path: 'pregacoes/:id', component: PregacaoComponent },
    { path: 'conteudos/:search', component: ConteudosComponent },
    { path: 'pandemia', component: PandemiaComponent },
    { path: '**', component: NotfoundComponent }
];