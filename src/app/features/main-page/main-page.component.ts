import {Component, HostListener} from '@angular/core';
import {BannerComponent} from "./banner/banner.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "@app/features/header/header.component";
import {ServicesComponent} from "./services/services.component";
import {CommonModule} from '@angular/common';
import {BadgeComponent} from '@app/features/main-page/badge/badge.component';

@Component({
  selector: 'xs-main-page',
  imports: [
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    CommonModule,
    BadgeComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
})
export class MainPageComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
