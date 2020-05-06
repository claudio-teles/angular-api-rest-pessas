import { TestBed } from '@angular/core/testing';

import { PessoaDetalheService } from './pessoa-detalhe.service';

describe('PessoaDetalheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaDetalheService = TestBed.get(PessoaDetalheService);
    expect(service).toBeTruthy();
  });
});
