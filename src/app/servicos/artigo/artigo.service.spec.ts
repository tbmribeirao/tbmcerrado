import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ArtigoService } from './artigo.service';

describe('ArtigoService', () => {
  let service: ArtigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtigoService]
    });
    service = TestBed.inject(ArtigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
