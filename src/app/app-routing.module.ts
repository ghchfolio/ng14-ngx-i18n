import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutRoutingModule) },
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: '**', component: HomeComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
