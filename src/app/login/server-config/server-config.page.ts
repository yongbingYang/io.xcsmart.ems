import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NavController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-server-config',
  templateUrl: './server-config.page.html',
  styleUrls: ['./server-config.page.scss'],
})
export class ServerConfigPage implements OnInit {

  public serverUrl = 'empty';

  constructor(
    public navController: NavController,
    public localStorage: StorageService) {

    this.serverUrl = this.localStorage.get('serverRootUrl');

  }

  ngOnInit() {

  }

  qrScan() {
    const serverConfig = '/qr-scanner';
    this.navController.navigateRoot(serverConfig);
  }

  saveServerConfig() {
    this.localStorage.set('serverRootUrl', this.serverUrl);
    this.navController.navigateForward('');
  }

}
