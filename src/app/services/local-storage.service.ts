import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private translateService: TranslateService) {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage['languagePref']) {
      let y = localStorage['languagePref'];
      this.translateService.use(y);
      console.log('you have langPref', y)
    } else {
      let x = this.translateService.defaultLang;
      localStorage['languagePref'] = x;
      console.log('langPref not exist stting to default', x)
    }
  }

  setLocalStorage(lang: any) {
    localStorage['languagePref'] = lang;
    console.log('updating langPref to', lang)
    this.translateService.use(localStorage['languagePref']);
  }

}
