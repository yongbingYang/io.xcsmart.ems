import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentInspectionExecutionPage } from './equipment-inspection-execution.page';

describe('EquipmentInspectionExecutionPage', () => {
  let component: EquipmentInspectionExecutionPage;
  let fixture: ComponentFixture<EquipmentInspectionExecutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentInspectionExecutionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentInspectionExecutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
