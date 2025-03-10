import { Component } from '@angular/core';
import {MainPageComponent} from './features/main-page/main-page.component';

@Component({
  selector: 'xs-root',
  imports: [ MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'xiusi';
}
