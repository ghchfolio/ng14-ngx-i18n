import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { Resources } from '../models/Resources';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    currentLang = 'en-us';
    private currentPage: string = '';
    private readonly translatedHeadersPath = 'assets/i18n/header';
    private readonly translatedBodyPath = 'assets/i18n/body';
    private readonly transatedFootersPath = 'assets/i18n/footer';

    constructor(private translateService: TranslateService, private router: Router) {
        this.checkLocalStorage();
    }

    navigationEndSub = this.router.events
        .subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    this.currentPage = event.urlAfterRedirects;
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
        Resources.headerPartial = `${this.translatedHeadersPath}/${this.currentLang}.json`;
        Resources.bodyPartial = `${this.translatedBodyPath}/${this.currentPage}/${this.currentLang}.json`;
        Resources.footerPartial = `${this.transatedFootersPath}/${this.currentLang}.json`;
        this.translateService.use(this.currentLang);
    }

}