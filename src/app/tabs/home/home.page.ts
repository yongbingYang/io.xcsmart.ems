import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public functionList: any[] = [];


  constructor() {

    this.functionList.push({
      functionName: '工厂建模',
      routeLink: '/tabs/home',
      description: 'Description'
    });

    this.functionList.push({
      functionName: '设备管理',
      routeLink: '/ems/equipment-management',
      description: 'Description'
    });

  }

  ngOnInit() {
  }

}
