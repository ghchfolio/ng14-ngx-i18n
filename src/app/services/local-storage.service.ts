import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { Resources } from '../models/Resources';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    currentLang = 'en-us';
    page: string = '';
    previousRoute = '';
    currentRoute = '';

    constructor(private translateService: TranslateService, private router: Router) {
        this.checkLocalStorage();
    }

    navigationEndSub = this.router.events
        .subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    this.page = event.urlAfterRedirects;
                    this.getTranslatedContent();
                }
            });

    langChangeSub = this.translateService.onLangChange
        .subscribe(res => this.setLocalStorage(res.lang));

    checkLocalStorage() {
        if (localStorage['languagePref'] && localStorage['languagePref'] !== undefined) {
            this.currentLang = localStorage['languagePref'];
        } else {
            this.setLocalStorage(this.translateService.defaultLang);
        }
    }

    setLocalStorage(languagePref: string) {
        localStorage['languagePref'] = languagePref;
        this.currentLang = languagePref;
        this.getTranslatedContent();
    }

    getTranslatedContent() {
        Resources.headerPartial = 'assets/i18n/header/' + this.currentLang + '.json';
        Resources.bodyPartial = 'assets/i18n/body' + this.page + '/' + this.currentLang + '.json';
        Resources.footerPartial = 'assets/i18n/footer/' + this.currentLang + '.json';
        this.translateService.use(this.currentLang);
    }

}