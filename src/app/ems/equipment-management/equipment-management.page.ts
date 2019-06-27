import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-management',
  templateUrl: './equipment-management.page.html',
  styleUrls: ['./equipment-management.page.scss'],
})
export class EquipmentManagementPage implements OnInit {

  public functionList: any[] = [];

  constructor() {

    this.functionList.push({
      functionName: '维修申请',
      routeLink: '/ems/equipment-maintenance-application',
      description: 'Description'
    });

    this.functionList.push({
      functionName: '点检执行',
      routeLink: '/ems/equipment-inspection-execution',
      description: 'Description'
    });

    this.functionList.push({
      functionName: '设备保养',
      routeLink: '/ems/equipment-maintenance',
      description: 'Description'
    });

    this.functionList.push({
      functionName: '设备状态',
      routeLink: '/ems/equipment-status',
      description: 'Description'
    });

  }

  ngOnInit() {
  }

}
