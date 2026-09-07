import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PandemiaComponent } from './pandemia.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';

describe('PandemiaComponent', () => {
  let component: PandemiaComponent;
  let fixture: ComponentFixture<PandemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PandemiaComponent, PaginacaoComponent ],
      providers: [ PaginaService, PregacaoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
