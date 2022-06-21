import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'reports', loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
    // { path: 'classrooms', loadChildren: () => import('./modules/classrooms/classrooms.module').then(m => m.ClassroomsModule) },
    // { path: 'exds', loadChildren: () => import('./modules/exds/exds.module').then(m => m.ExdsModule) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
