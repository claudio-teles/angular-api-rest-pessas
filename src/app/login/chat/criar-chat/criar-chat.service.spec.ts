import { TestBed } from '@angular/core/testing';

import { CriarChatService } from './criar-chat.service';

describe('CriarChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriarChatService = TestBed.get(CriarChatService);
    expect(service).toBeTruthy();
  });
});
