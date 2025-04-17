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
    path: 'about-us',
    loadComponent: () =>
      import('./features/about-us/about-us.component').then(
        m => m.AboutUsComponent
      ),
  },
  {
    path: 'teachers',
    loadComponent: () =>
      import('./features/teachers/teachers.component').then(
        m => m.TeachersComponent
      ),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('./features/contact-us/contact-us.component').then(
        m => m.ContactUsComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products.component').then(
        m => m.ProductsComponent
      ),
  },
  {
    path: 'success-stories',
    loadComponent: () =>
      import('./features/success-stories/success-stories.component').then(
        m => m.SuccessStoriesComponent
      ),
  },
];
