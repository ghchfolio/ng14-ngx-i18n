import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    languages = [
        { locale: 'en-us', name: 'English' },
        { locale: 'fr-fr', name: 'French', },
        { locale: 'de-de', name: 'German' },
        { locale: 'iw-il', name: 'Hebrew' },
        { locale: 'es-es', name: 'Spanish' }
    ];
    currentLang = '';
    langChangeSub = this.translateService.onLangChange.subscribe(res => this.currentLang = res.lang);

    constructor(private localStorageService: LocalStorageService, private translateService: TranslateService) { }

    languageSelect(locale: string = 'us-en') {
        this.localStorageService.setLocalStorage(locale);
    }

    ngOnDestroy() {
        this.langChangeSub.unsubscribe();
    }
}
