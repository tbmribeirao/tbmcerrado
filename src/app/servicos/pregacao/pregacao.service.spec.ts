import { TestBed } from '@angular/core/testing';

import { PregacaoService } from './pregacao.service';

describe('PregacaoService', () => {
  let service: PregacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
