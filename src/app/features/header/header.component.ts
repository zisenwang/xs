import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ScrollService } from '@services/index';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import {
  HEADER_SECTOR,
  MAIN_PAGE,
  LANG_ZH_CN,
  LANG_EN,
} from '@shared/constants';
import {TranslateButtonComponent} from '@shared/components/translate-button/translate-button.component';

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule, TranslateModule, RouterLink, TranslateButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  protected readonly HEADER_SECTOR = HEADER_SECTOR;
  protected readonly MAIN_PAGE = MAIN_PAGE;

  private scrollService = inject(ScrollService);
  private router = inject(Router);

  items = [
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
  ];
}
