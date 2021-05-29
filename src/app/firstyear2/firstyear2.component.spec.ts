import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Firstyear2Component } from './firstyear2.component';

describe('Firstyear2Component', () => {
  let component: Firstyear2Component;
  let fixture: ComponentFixture<Firstyear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Firstyear2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Firstyear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
