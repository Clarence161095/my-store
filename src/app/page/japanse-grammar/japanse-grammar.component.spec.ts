import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanseGrammarComponent } from './japanse-grammar.component';

describe('JapanseGrammarComponent', () => {
  let component: JapanseGrammarComponent;
  let fixture: ComponentFixture<JapanseGrammarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapanseGrammarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapanseGrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
