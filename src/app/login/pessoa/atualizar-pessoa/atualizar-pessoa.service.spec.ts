import { TestBed } from '@angular/core/testing';

import { AtualizarPessoaService } from './atualizar-pessoa.service';

describe('AtualizarPessoaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtualizarPessoaService = TestBed.get(AtualizarPessoaService);
    expect(service).toBeTruthy();
  });
});
