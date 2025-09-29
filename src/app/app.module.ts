import { LoadingInterceptorService } from './servicos/loading/loading-interceptor.service';
import { PregacaoService } from 'src/app/servicos/pregacao/pregacao.service';
import { ArtigoService } from './servicos/artigo/artigo.service';
import { PaginaService } from './servicos/pagina/pagina.service';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { rootRouterConfig } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { ArtigoComponent } from './institucional/artigo/artigo.component';
import { ArtigosComponent } from './institucional/artigos/artigos.component';
import { PaginaComponent } from './institucional/pagina/pagina.component';
import { PregacaoComponent } from './institucional/pregacao/pregacao.component';
import { PregacoesComponent } from './institucional/pregacoes/pregacoes.component';
import { PaginacaoComponent } from './componentes/paginacao/paginacao.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ConteudosComponent } from './institucional/conteudos/conteudos.component';
import { PandemiaComponent } from './institucional/pandemia/pandemia.component';
import { NotfoundComponent } from './institucional/notfound/notfound.component';
import { LoadingComponent } from './componentes/loading/loading.component';
registerLocaleData(localeBr, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    ArtigoComponent,
    ArtigosComponent,
    PaginaComponent,
    PregacaoComponent,
    PregacoesComponent,
    PaginacaoComponent,
    ConteudosComponent,
    PandemiaComponent,
    NotfoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { scrollPositionRestoration: 'enabled' })]
  ],
  providers: [
    PaginaService,
    ArtigoService,
    PregacaoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
