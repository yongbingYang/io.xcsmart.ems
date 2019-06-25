import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public config: any = {
    domain: 'http://jd.itying.com/'
  };

  constructor(
    public http: HttpClient
  ) {

  }

  // ajax get 方法
  ajaxGet(url: string) {

    const api = this.config.domain + url;

    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }


  // ajax post 方法
  ajaxPost(url: string, json: object) {
    const api = this.config.domain + url;
    return new Promise((resove, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      });
    });

  }
}
