import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ConteudosComponent } from './conteudos.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { ArtigoService } from '../../servicos/artigo/artigo.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('ConteudosComponent', () => {
  let component: ConteudosComponent;
  let fixture: ComponentFixture<ConteudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ConteudosComponent, LoadingComponent],
    imports: [RouterTestingModule],
    providers: [
        ArtigoService,
        PregacaoService,
        { provide: ActivatedRoute, useValue: { params: of({ termo: 'graca' }) } },
        provideHttpClient(withXhr(), withInterceptorsFromDi()),
        provideHttpClientTesting()
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
