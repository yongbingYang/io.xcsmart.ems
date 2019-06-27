import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSettingPage } from './contact-setting.page';

describe('ContactSettingPage', () => {
  let component: ContactSettingPage;
  let fixture: ComponentFixture<ContactSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
