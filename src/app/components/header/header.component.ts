import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    languages = [
        { label: 'English', value: 'en-us' },
        { label: 'French', value: 'fr-fr' },
        { label: 'Germany', value: 'de-de' },
    ];

    constructor(private translateService: TranslateService) { }

    ngOnInit(): void { }

    languageSelect(event: any) {
        this.translateService.use(event.target.value);
    }

}
