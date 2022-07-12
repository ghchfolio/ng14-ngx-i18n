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

    // currentLang = this.cleanedCurrentLang(this.localStorageService.currentLang);
    currentLang = this.localStorageService.currentLang;

    constructor(
        private localStorageService: LocalStorageService, private translateService: TranslateService) {
    }

    languageSelect(locale: string = 'us-en') {
        this.localStorageService.setLocalStorage(locale);
    }

    // cleanedCurrentLang(str: string) {
    //     if (str.includes('_')) {
    //         let arr = str.split('_');
    //         return arr[0];
    //     } else {
    //         return str;
    //     }
    // }

}
