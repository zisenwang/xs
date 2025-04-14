import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/main-page/main-page-content/main-page-content.component').then(m => m.MainPageContentComponent)
  },

];
