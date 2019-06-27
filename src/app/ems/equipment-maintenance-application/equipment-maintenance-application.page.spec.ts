import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMaintenanceApplicationPage } from './equipment-maintenance-application.page';

describe('EquipmentMaintenanceApplicationPage', () => {
  let component: EquipmentMaintenanceApplicationPage;
  let fixture: ComponentFixture<EquipmentMaintenanceApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentMaintenanceApplicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentMaintenanceApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
