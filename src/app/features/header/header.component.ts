import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ScrollService } from '@services/index';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  private scrollService = inject(ScrollService);
  private translate = inject(TranslateService);

  currentLang = this.translate.currentLang;

  ngOnInit() {
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang() || 'zh-CN';
  }

  items = [
    {
      label: 'header.aboutUs',
      icon: 'pi pi-fw pi-briefcase',
      command: () => this.scrollService.scrollToElement('intro'),
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
}
