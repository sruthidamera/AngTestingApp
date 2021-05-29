import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentactivitiesComponent } from './departmentactivities.component';

describe('DepartmentactivitiesComponent', () => {
  let component: DepartmentactivitiesComponent;
  let fixture: ComponentFixture<DepartmentactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
