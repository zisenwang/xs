import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ScrollService } from '@services/index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'xs-header',
  imports: [ButtonModule, Menubar, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  private scrollService = inject(ScrollService);

  items: MenuItem[] = [
    {
      label: '公司简介',
      icon: 'pi pi-fw pi-briefcase',
      command: () => this.scrollService.scrollToElement('badge'),
    },
    {
      label: '成功案例',
      icon: 'pi pi-fw pi-comments',
      command: () => this.scrollService.scrollToElement('testimonials'),
    },
    {
      label: 'AI教师',
      icon: 'pi pi-fw pi-cloud',
    },
    {
      label: '联系我们',
      icon: 'pi pi-fw pi-envelope',
      command: () => this.scrollService.scrollToElement('contact'),
    },
    {
      label: '教师介绍',
      icon: 'pi pi-fw pi-user',
      command: () => this.scrollService.scrollToElement('teacher'),
    },
  ];
}
