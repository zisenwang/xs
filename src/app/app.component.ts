import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './features/main-page/header/header.component';
import { BannerComponent} from './features/main-page/banner/banner.component';
import { ServicesComponent} from './features/main-page/services/services.component';
import { FooterComponent} from './features/main-page/footer/footer.component';
import {MainPageComponent} from './features/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [ MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xiusi';
}
