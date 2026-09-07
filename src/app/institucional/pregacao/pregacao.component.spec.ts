import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PregacaoComponent } from './pregacao.component';
import { LoadingComponent } from '../../componentes/loading/loading.component';
import { PregacaoService } from '../../servicos/pregacao/pregacao.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PregacaoComponent', () => {
  let component: PregacaoComponent;
  let fixture: ComponentFixture<PregacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PregacaoComponent, LoadingComponent],
    imports: [RouterTestingModule],
    providers: [
        PregacaoService,
        { provide: ActivatedRoute, useValue: { params: of({ id: '1' }) } },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
