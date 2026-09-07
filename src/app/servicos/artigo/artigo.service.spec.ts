import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ArtigoService } from './artigo.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ArtigoService', () => {
  let service: ArtigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [ArtigoService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(ArtigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
