import { Component } from '@angular/core';
import { MainPageComponent } from './features/main-page/main-page.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'xs-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'xiusi';
}
