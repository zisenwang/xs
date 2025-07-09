import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

export const mainPageRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./main-page-content/main-page-content.component').then(
            m => m.MainPageContentComponent
          ),
      },
      {
        path: 'about-us',
        loadComponent: () =>
          import('../about-us/about-us.component').then(
            m => m.AboutUsComponent
          ),
      },
      {
        path: 'teachers',
        loadComponent: () =>
          import('../teachers/teachers.component').then(
            m => m.TeachersComponent
          ),
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('../contact-us/contact-us.component').then(
            m => m.ContactUsComponent
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.routes').then(m => m.productsRoutes),
      },
      {
        path: 'success-stories',
        loadComponent: () =>
          import('../success-stories/success-stories.component').then(
            m => m.SuccessStoriesComponent
          ),
      },
    ]
  }
];
