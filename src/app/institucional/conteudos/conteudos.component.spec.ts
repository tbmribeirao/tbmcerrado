import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ConteudosComponent } from './conteudos.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';

describe('ConteudosComponent', () => {
  let component: ConteudosComponent;
  let fixture: ComponentFixture<ConteudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ConteudosComponent, LoadingComponent ],
      providers: [
        ArtigoService,
        PregacaoService,
        { provide: ActivatedRoute, useValue: { params: of({ termo: 'graca' }) } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
