import { Component } from '@angular/core';
import {BG_ABOUT_US_URL} from '@shared/constants';
import {Image} from 'primeng/image';

@Component({
  selector: 'xs-about-us',
  imports: [
    Image

  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly BG_ABOUT_US_URL = BG_ABOUT_US_URL;
}
