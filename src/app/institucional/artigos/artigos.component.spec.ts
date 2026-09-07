import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ArtigosComponent } from './artigos.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ArtigosComponent', () => {
  let component: ArtigosComponent;
  let fixture: ComponentFixture<ArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ArtigosComponent, LoadingComponent, PaginacaoComponent],
    imports: [RouterTestingModule],
    providers: [ArtigoService, PaginaService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
