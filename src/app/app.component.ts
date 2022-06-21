import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    langMenu = [
        { label: 'English', value: 'en' },
        { label: 'French', value: 'fr' },
        { label: 'Germany', value: 'de' },
    ];

    constructor() {
    }

    onLanguageChange(lang: any) {
        // this.translateService.use(lang.value)
    }
}
