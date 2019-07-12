import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-person',
  templateUrl: './contact-person.page.html',
  styleUrls: ['./contact-person.page.scss'],
})
export class ContactPersonPage implements OnInit {

  public userInfo: any;

  constructor() {

    this.userInfo = {
      name: '王大壮',
      loginId: 'device001',
      roleName: '设备管理员',
      department: '设备部',
      email: '9999@qq.com',
      phoneNumber: '110',
    };

  }
  ngOnInit() {
  }

}
