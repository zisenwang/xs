import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import {Menubar} from 'primeng/menubar';
import {ScrollService} from '@shared/services';

@Component({
  selector: 'xs-main-page-header',
  imports: [ButtonModule, Menubar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {
  private scrollService = inject(ScrollService);

  items: MenuItem[] = [
      {
        label: '公司简介',
        icon: 'pi pi-fw pi-briefcase',
        command: () => this.scrollService.scrollToElement('services')
      },
      {
        label: '成功案例',
        icon: 'pi pi-fw pi-comments',
        command: () => this.scrollService.scrollToElement('testimonials')
      },
      {
        label: 'AI教师',
        icon: 'pi pi-fw pi-comments',
      },
      {
        label: '联系我们',
        icon: 'pi pi-fw pi-envelope',
        command: () => this.scrollService.scrollToElement('contact')
      }
    ];

}
