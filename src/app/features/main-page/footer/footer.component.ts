import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { environment } from '@env/environment';

export interface INavItem {
  name: string;
  href: string;
}

@Component({
  selector: 'xs-main-page-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
navItems: INavItem[] = [
    {
      name: 'header.home',
      href: '/',
    },
   {
     name: 'header.aboutUs',
     href: '/about-us',
   },
  {
    name: 'header.teachers',
    href: '/teachers',
  },
  {
    name: 'header.successStories',
    href: '/success-stories',
  },
  {
    name: 'header.contactUs',
    href: '/contact-us',
  },
  {
    name: 'header.ecat',
    href: environment.ecatUrl
  },
  ]
}
