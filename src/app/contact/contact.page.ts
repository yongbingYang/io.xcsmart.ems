import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  public userInfo: any;

  constructor() {
    this.userInfo = {
      name: '王大壮',
      loginId: 'device001',
      roleName: '设备管理员',
      department: '设备部',
      phoneNumber: '110'
    };
  }

  ngOnInit() {
  }

}
