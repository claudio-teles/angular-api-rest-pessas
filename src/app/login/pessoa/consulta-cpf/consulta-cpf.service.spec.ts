import { TestBed } from '@angular/core/testing';

import { ConsultaCpfService } from './consulta-cpf.service';

describe('ConsultaCpfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaCpfService = TestBed.get(ConsultaCpfService);
    expect(service).toBeTruthy();
  });
});
