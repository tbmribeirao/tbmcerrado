import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PaginaService } from './pagina.service';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';

describe('PaginaService', () => {
  let service: PaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [PaginaService, provideHttpClient(withXhr(), withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(PaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
