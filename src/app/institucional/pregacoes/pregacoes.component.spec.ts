import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { PregacoesComponent } from './pregacoes.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('PregacoesComponent', () => {
  let component: PregacoesComponent;
  let fixture: ComponentFixture<PregacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PregacoesComponent, LoadingComponent, PaginacaoComponent],
    imports: [RouterTestingModule, FormsModule],
    providers: [PaginaService, PregacaoService, provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
