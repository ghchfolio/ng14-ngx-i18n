import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export class CustomLoader implements TranslateLoader {

    constructor(private http: HttpClient) { }

    getTranslation(lang: string): Observable<any> {

        let header$ = new Observable();
        let body$ = new Observable();
        let footer$ = new Observable();

        const page = localStorage['page'] || '/home';
        header$ = this.http.get(`assets/i18n/header/${lang}.json`);
        body$ = this.http.get(`assets/i18n/body${page}/${lang}.json`);
        footer$ = this.http.get(`assets/i18n/footer/${lang}.json`);

        console.log('lang/pg', lang, page)

        return forkJoin({ header: header$, body: body$, footer: footer$ })
            .pipe(
                tap((data) => console.log('data', data)),
                map(data => data)
            );
    }
}