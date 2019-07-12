import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tabs/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: '../tabs/message/message.module#MessagePageModule'
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren: '../tabs/me/me.module#MePageModule'
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
export class TabsPageRoutingModule { }
