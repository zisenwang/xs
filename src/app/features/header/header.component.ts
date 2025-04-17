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

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  protected readonly HEADER_SECTOR = HEADER_SECTOR;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;
  protected readonly LANG_EN = LANG_EN;
  protected readonly MAIN_PAGE = MAIN_PAGE;

  private scrollService = inject(ScrollService);
  private translate = inject(TranslateService);
  private router = inject(Router);

  currentLang = this.translate.currentLang;

  ngOnInit() {
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang() || 'zh-CN';
  }

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

  selectLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}
