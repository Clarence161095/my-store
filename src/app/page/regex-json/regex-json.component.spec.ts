import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexJsonComponent } from './regex-json.component';

describe('RegexJsonComponent', () => {
  let component: RegexJsonComponent;
  let fixture: ComponentFixture<RegexJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
