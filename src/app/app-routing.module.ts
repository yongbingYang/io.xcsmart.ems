import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'server-config', loadChildren: './login/server-config/server-config.module#ServerConfigPageModule' },
  { path: 'qr-scanner', loadChildren: './login/qr-scanner/qr-scanner.module#QrScannerPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './ems/ems.module#EmsPageModule' },
  { path: '', loadChildren: './contact/contact.module#ContactPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
