import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'server-config', loadChildren: './login/server-config/server-config.module#ServerConfigPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'qr-scanner', loadChildren: './login/qr-scanner/qr-scanner.module#QrScannerPageModule' },
  { path: '', loadChildren: './ems/ems.module#EmsPageModule' },
  { path: 'equipment-management', loadChildren: './ems/equipment-management/equipment-management.module#EquipmentManagementPageModule' },
  { path: 'contact-setting', loadChildren: './contact/contact-setting/contact-setting.module#ContactSettingPageModule' },
  { path: 'modify-password', loadChildren: './contact/contact-setting/modify-password/modify-password.module#ModifyPasswordPageModule' },
  { path: 'contact-person', loadChildren: './contact/contact-person/contact-person.module#ContactPersonPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
