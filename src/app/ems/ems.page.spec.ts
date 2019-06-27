import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsPage } from './ems.page';

describe('TabsPage', () => {
  let component: EmsPage;
  let fixture: ComponentFixture<EmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
