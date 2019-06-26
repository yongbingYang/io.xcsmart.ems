import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public functionList: any[] = [];


  constructor() {
    for (let i = 0; i < 8; i++) {
      this.functionList.push({
        functionName: 'Name' + i,
        routeLink: '/tabs/message',
        description: 'Description' + i
      });
    }
  }

  ngOnInit() {
  }

}
