import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './features/main-page/main-page-content/main-page-content.component'
      ).then(m => m.MainPageContentComponent),
  },
  {
    path:'about-us',
    loadComponent: () =>
      import('./features/about-us/about-us.component').then(m => m.AboutUsComponent),
  }
];
