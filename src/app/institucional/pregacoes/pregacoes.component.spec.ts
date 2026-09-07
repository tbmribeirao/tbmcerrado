import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PregacoesComponent } from './pregacoes.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';

describe('PregacoesComponent', () => {
  let component: PregacoesComponent;
  let fixture: ComponentFixture<PregacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PregacoesComponent, LoadingComponent, PaginacaoComponent ],
      providers: [ PaginaService, PregacaoService ]
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
