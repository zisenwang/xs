import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/main-page/main-page.routes').then(m => m.mainPageRoutes),
  },
  {
    path: 'ai',
    loadComponent: () =>
      import('./features/ai/ai.component').then(m => m.AiComponent),
  }
];
