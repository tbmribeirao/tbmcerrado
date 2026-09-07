import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ArtigosComponent } from './artigos.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { PaginaService } from '../../servicos/pagina/pagina.service';

describe('ArtigosComponent', () => {
  let component: ArtigosComponent;
  let fixture: ComponentFixture<ArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ArtigosComponent, LoadingComponent, PaginacaoComponent ],
      providers: [ ArtigoService, PaginaService ]
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
