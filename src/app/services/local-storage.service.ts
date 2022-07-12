import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    currentLang = '';
    private currentPage = '';

    constructor(private translateService: TranslateService, private router: Router) {
        this.checkLocalStorage();
    }

    navigationEndSub = this.router.events
        .subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    this.currentPage = event.urlAfterRedirects;
                    localStorage['page'] = this.currentPage;
                }
            });

    // langChangeSub = this.translateService.onLangChange
    //     .subscribe((res: any) => {
    // this.setLocalStorage(res.locale);
    // this.currentLang = res.locale;
    // this.getTranslatedContent();
    //     console.log('>', res)
    // }
    // );

    checkLocalStorage() {
        if (localStorage['locale'] && localStorage['locale'] !== 'undefined') {
            this.currentLang = localStorage['locale'];
        } else {
            this.setLocalStorage(this.translateService.defaultLang);
            this.currentLang = this.translateService.defaultLang;
        }
        this.translateService.use(this.currentLang);
        // this.getTranslatedContent();
    }

    setLocalStorage(languagePref: string) {
        localStorage['locale'] = languagePref;
        this.currentLang = languagePref;
        this.translateService.use(this.currentLang);
        // this.getTranslatedContent();
    }

    // getTranslatedContent() {
    // console.log('> going to use', this.currentLang, this.translateService.currentLang)
    // debugger
    // this.translateService.use(this.currentLang);
    // this.translateService.setDefaultLang(this.currentLang);
    // }

}