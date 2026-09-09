import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PregacaoService } from './pregacao.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('PregacaoService', () => {
  let service: PregacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [PregacaoService, provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(PregacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
