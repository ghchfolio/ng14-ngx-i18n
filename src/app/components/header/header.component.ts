import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    // languages = [
    //     { label: 'English', value: 'en-us' },
    //     { label: 'French', value: 'fr-fr' },
    //     { label: 'Germany', value: 'de-de' },
    // ];

    constructor(private localStorageService: LocalStorageService) { }

    languageSelect(event: any) {
        const locale = event.target.value;
        if (locale !== '') this.localStorageService.setLocalStorage(locale);
    }

}
