import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TranslateModule.forChild({ isolate: false })
    ],
    exports: [RouterModule],
    declarations: [
        AboutComponent
    ]
})
export class AboutRoutingModule { }