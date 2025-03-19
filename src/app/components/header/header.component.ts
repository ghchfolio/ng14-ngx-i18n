import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {

    languages = [
        { locale: 'en-us', name: 'English' },
        { locale: 'fr-fr', name: 'French', },
        { locale: 'de-de', name: 'German' },
        { locale: 'iw-il', name: 'Hebrew' },
        { locale: 'es-es', name: 'Spanish' }
    ];

    currentLang = this.localStorageService.currentLang;

    constructor(
        private localStorageService: LocalStorageService) {
    }

    languageSelect(locale: string = 'us-en') {
        this.localStorageService.setLocalStorage(locale);
    }

}
