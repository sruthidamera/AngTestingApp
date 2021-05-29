import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondyear2Component } from './secondyear2.component';

describe('Secondyear2Component', () => {
  let component: Secondyear2Component;
  let fixture: ComponentFixture<Secondyear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Secondyear2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Secondyear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
