import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarChatComponent } from './criar-chat.component';

describe('CriarChatComponent', () => {
  let component: CriarChatComponent;
  let fixture: ComponentFixture<CriarChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
