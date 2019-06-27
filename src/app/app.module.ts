import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http相关模块
import { HttpClientModule } from '@angular/common/http';

// 引入配置公共服务
import { CommonService } from './services/common.service';
import { StorageService } from './services/storage.service';

// 设备相关模块
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot({
      backButtonText: '',
      backButtonIcon: 'arrow-back'
    }),
    AppRoutingModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    StorageService,

    QRScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
