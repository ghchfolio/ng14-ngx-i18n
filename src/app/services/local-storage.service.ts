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
            this.translateService.use(localStorage['languagePref']);
        } else {
            this.setLocalStorage(this.translateService.defaultLang);
        }
    }

    setLocalStorage(languagePref: string) {
        localStorage['languagePref'] = languagePref;
        this.translateService.use(localStorage['languagePref']);
    }

}
