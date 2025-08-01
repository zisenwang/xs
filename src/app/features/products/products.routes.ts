import { Routes } from '@angular/router';
import { ProductsComponent } from '@app/features/products/products.component';
import { AdvancedComponent } from '@app/features/products/advanced/advanced.component';
import { SprintComponent } from '@app/features/products/sprint/sprint.component';
import { InterviewComponent } from '@app/features/products/interview/interview.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      // { path: 'foundation', component: FoundationComponent },
      { path: 'advanced', component: AdvancedComponent },
      { path: 'interview', component: InterviewComponent },
      // { path: 'prep', component: PrepComponent },
      { path: 'sprint', component: SprintComponent },
      { path: '', redirectTo: 'sprint', pathMatch: 'full' },
    ],
  },
];
