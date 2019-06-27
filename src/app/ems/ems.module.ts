import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmsPageRoutingModule } from './ems.router.module';

import { EmsPage } from './ems.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EmsPageRoutingModule
  ],
  declarations: [EmsPage]
})
export class EmsPageModule { }
