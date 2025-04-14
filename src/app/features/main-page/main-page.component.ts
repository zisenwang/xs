import { Component } from '@angular/core';
import { HeaderComponent } from '@app/features/header/header.component';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'xs-main-page',
  imports: [
    HeaderComponent,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
})
export class MainPageComponent {

}
