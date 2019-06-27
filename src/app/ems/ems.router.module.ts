import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmsPage } from './ems.page';

const routes: Routes = [
  {
    path: 'ems',
    component: EmsPage,
    children: [
      {
        path: 'equipment-management',
        children: [
          {
            path: '',
            loadChildren: '../ems/equipment-management/equipment-management.module#EquipmentManagementPageModule'
          }
        ]
      },
      {
        path: 'equipment-maintenance-application',
        children: [
          {
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: '../ems/equipment-maintenance-application/equipment-maintenance-application.module#EquipmentMaintenanceApplicationPageModule'
          }
        ]
      },
      {
        path: 'equipment-inspection-execution',
        children: [
          {
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: '../ems/equipment-inspection-execution/equipment-inspection-execution.module#EquipmentInspectionExecutionPageModule'
          }
        ]
      },
      {
        path: 'equipment-maintenance',
        children: [
          {
            path: '',
            loadChildren: '../ems/equipment-maintenance/equipment-maintenance.module#EquipmentMaintenancePageModule'
          }
        ]
      },
      {
        path: 'equipment-status',
        children: [
          {
            path: '',
            loadChildren: '../ems/equipment-status/equipment-status.module#EquipmentStatusPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class EmsPageRoutingModule { }
