import { TestBed } from '@angular/core/testing';

import { ListaPesssoasService } from './lista-pesssoas.service';

describe('ListaPesssoasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaPesssoasService = TestBed.get(ListaPesssoasService);
    expect(service).toBeTruthy();
  });
});
