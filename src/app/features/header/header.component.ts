import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ScrollService } from '@services/index';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import {HEADER_SECTOR, MAIN_PAGE} from '@shared/constants';
import {LANG_EN, LANG_ZH_CN} from '@shared/constants/lang.constants';

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
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
      command: () => this.scrollService.scrollToElement('teacher'),
    },
    {
      label: 'header.programs',
      icon: 'pi pi-fw pi-cloud',
      command: () => this.scrollService.scrollToElement('business'),
    },
    {
      label: 'header.successStories',
      icon: 'pi pi-fw pi-comments',
      command: () => this.scrollService.scrollToElement('testimonials'),
    },
    {
      label: 'header.contactUs',
      icon: 'pi pi-fw pi-envelope',
      command: () => this.scrollService.scrollToElement('contact'),
    },
  ];

  selectLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  protected readonly HEADER_SECTOR = HEADER_SECTOR;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;
  protected readonly LANG_EN = LANG_EN;
  protected readonly MAIN_PAGE = MAIN_PAGE;
}
