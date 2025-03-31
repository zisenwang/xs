import {Component, inject, OnInit} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ScrollService } from '@services/index';
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit{
  private scrollService = inject(ScrollService);
  private translate = inject(TranslateService);

  currentLang = this.translate.currentLang;

  items: MenuItem[] = [];

  ngOnInit() {
    this.translateMenuItems();
  }

  selectLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  private translateMenuItems() {
    this.translate.get([
      'header.aboutUs',
      'header.teachers',
      'header.programs',
      'header.successStories',
      'header.contactUs'
    ]).subscribe(translations => {
      this.items = [
        {
          label: translations['header.aboutUs'],
          icon: 'pi pi-fw pi-briefcase',
          command: () => this.scrollService.scrollToElement('intro'),
        },
        {
          label: translations['header.teachers'],
          icon: 'pi pi-fw pi-user',
          command: () => this.scrollService.scrollToElement('teacher'),
        },
        {
          label: translations['header.programs'],
          icon: 'pi pi-fw pi-cloud',
        },
        {
          label: translations['header.successStories'],
          icon: 'pi pi-fw pi-comments',
          command: () => this.scrollService.scrollToElement('testimonials'),
        },
        {
          label: translations['header.contactUs'],
          icon: 'pi pi-fw pi-envelope',
          command: () => this.scrollService.scrollToElement('contact'),
        },
      ];
    });
  }
}
