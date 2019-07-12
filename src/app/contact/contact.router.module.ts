import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPage,
    children: [
      {
        path: 'contact-person',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact-person/contact-person.module#ContactPersonPageModule'
          }
        ]
      },
      {
        path: 'contact-setting',
        children: [
          {
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: '../contact/contact-setting/contact-setting.module#ContactSettingPageModule'
          }
        ]
      },
      {
        path: 'modify-password',
        children: [
          {
            path: '',
            // tslint:disable-next-line:max-line-length
            loadChildren: '../contact/modify-password/modify-password.module#ModifyPasswordPageModule'
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
export class ContactPageRoutingModule { }
