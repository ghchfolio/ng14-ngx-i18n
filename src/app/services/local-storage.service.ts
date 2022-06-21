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
      let ls = localStorage['languagePref'];
      this.translateService.use(ls);
    } else {
      let ls = this.translateService.defaultLang;
      localStorage['languagePref'] = ls;
    }
  }

  setLocalStorage(lang: any) {
    localStorage['languagePref'] = lang;
    this.translateService.use(localStorage['languagePref']);
  }

}
