import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EquipmentInspectionExecutionPage } from './equipment-inspection-execution.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentInspectionExecutionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EquipmentInspectionExecutionPage]
})
export class EquipmentInspectionExecutionPageModule {}
