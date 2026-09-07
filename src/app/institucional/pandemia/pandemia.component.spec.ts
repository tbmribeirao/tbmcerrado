import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PandemiaComponent } from './pandemia.component';
import { PaginacaoComponent } from '../../componentes/paginacao/paginacao.component';
import { PaginaService } from '../../servicos/pagina/pagina.service';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PandemiaComponent', () => {
  let component: PandemiaComponent;
  let fixture: ComponentFixture<PandemiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PandemiaComponent, PaginacaoComponent],
    imports: [RouterTestingModule],
    providers: [PaginaService, PregacaoService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
