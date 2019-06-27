import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EquipmentManagementPage } from './equipment-management.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EquipmentManagementPage]
})
export class EquipmentManagementPageModule {}
