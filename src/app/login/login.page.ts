import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { CommonService } from '../services/common.service';

import { StorageService } from '../services/storage.service';

import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userinfo: any = {
    username: '',
    password: ''
  };

  constructor(
    public navController: NavController,
    public common: CommonService,
    public storage: StorageService,
    public eventService: EventService,
    public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {

  }

  // 登录
  doLogin() {

    const successUrl = '/tabs/home';

    if (this.userinfo.username === '') {
      alert('用户名不能为空');
    } else if (this.userinfo.password.length < 6) {

      alert('密码错误');
    } else {
      const api = 'api/doLogin';
      this.common.ajaxPost(api, {
        username: this.userinfo.username,
        password: this.userinfo.password,
      }).then((response: any) => {
        console.log(response);
        if (response.success) {
          // 1、保存用户信息   2、跳转到用户中心 (根)
          this.storage.set('userinfo', response.userinfo[0]);
          this.navController.navigateRoot(successUrl);

          // 通知用户中心更新用户信息
          this.eventService.event.emit('useraction');

        } else {
          alert(response.message);     // toast
        }
      });

    }

  }

  setServerConfig() {
    const serverConfig = '/server-config';
    this.navController.navigateRoot(serverConfig);
  }
}
