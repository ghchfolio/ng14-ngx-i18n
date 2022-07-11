import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resources } from '../models/Resources'

export class CustomLoader implements TranslateLoader {

    constructor(private http: HttpClient) { }

    // We supply getTranslation with our own custom loader (the default loader only loads one resource).
    // This will load multiple resources then join them into 1 json file.

    getTranslation(lang: string): Observable<any> {

        let arr = lang.split('_');
        const header$ = this.http.get(Resources.headerPartial);
        const body$ = this.http.get(Resources.bodyPartial);
        const footer$ = this.http.get(Resources.footerPartial);

        return forkJoin({ header: header$, body: body$, footer: footer$ })
            .pipe(
                map(data => data)
            );
    }
}