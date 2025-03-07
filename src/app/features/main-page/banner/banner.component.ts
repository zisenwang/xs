import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {ScrollService} from '@shared/services';

@Component({
  selector: 'xs-main-page-banner',
  imports: [
    Button
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private scrollService = inject(ScrollService);
  videoUrl = '/video_360p.mp4'
  videoLoaded = false;

  scrollToService = () => this.scrollService.scrollToElement("services")
}
