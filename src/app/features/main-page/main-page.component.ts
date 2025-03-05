import { Component } from '@angular/core';
import {BannerComponent} from "./banner/banner.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {ServicesComponent} from "./services/services.component";
import {Divider} from 'primeng/divider';

@Component({
  selector: 'xs-main-page',
  imports: [
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    ServicesComponent,
    Divider
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
