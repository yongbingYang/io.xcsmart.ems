import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConfigPage } from './server-config.page';

describe('ServerConfigPage', () => {
  let component: ServerConfigPage;
  let fixture: ComponentFixture<ServerConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerConfigPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
