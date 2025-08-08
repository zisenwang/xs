import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { HEADER_SECTOR, MAIN_PAGE } from '@shared/constants';
import { TranslateButtonComponent } from '@shared/components/translate-button/translate-button.component';
import { environment } from '@env/environment'

export interface IMenuItem {
  label: string;
  icon: string;
  command: () => void;
  badge?: string;
}

@Component({
  selector: 'xs-header',
  imports: [
    ButtonModule,
    Menubar,
    CommonModule,
    TranslateModule,
    RouterLink,
    TranslateButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  protected readonly HEADER_SECTOR = HEADER_SECTOR;
  protected readonly MAIN_PAGE = MAIN_PAGE;

  private router = inject(Router);

  items: IMenuItem[] = [
    {
      label: 'header.aboutUs',
      icon: 'pi pi-fw pi-briefcase',
      command: () => this.router.navigate(['/about-us']),
    },
    {
      label: 'header.teachers',
      icon: 'pi pi-fw pi-user',
      command: () => this.router.navigate(['/teachers']),
    },
    {
      label: 'header.products',
      icon: 'pi pi-fw pi-cloud',
      command: () => this.router.navigate(['/products']),
    },
    {
      label: 'header.successStories',
      icon: 'pi pi-fw pi-comments',
      command: () => this.router.navigate(['/success-stories']),
    },
    {
      label: 'header.contactUs',
      icon: 'pi pi-fw pi-envelope',
      command: () => this.router.navigate(['/contact-us']),
    },
    {
      label: 'header.ecat',
      icon: 'pi pi-fw pi-globe',
      command: () => window.open(environment.ecatUrl, '_blank'),
      badge: 'New!'
    }
  ];
}
