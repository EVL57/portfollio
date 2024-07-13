import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MusicComponent } from './components/music/music.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, pathMatch: 'full'},
    {path: 'music', component: MusicComponent, pathMatch: 'full'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},


];
