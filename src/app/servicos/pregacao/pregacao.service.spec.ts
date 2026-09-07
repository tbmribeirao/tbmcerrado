import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PregacaoService } from './pregacao.service';

describe('PregacaoService', () => {
  let service: PregacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PregacaoService]
    });
    service = TestBed.inject(PregacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
