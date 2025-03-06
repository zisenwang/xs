import {Component, inject} from '@angular/core';
import {Button} from 'primeng/button';
import {Image} from 'primeng/image';
import {ScrollService} from '@shared/services';

@Component({
  selector: 'xs-main-page-banner',
  imports: [
    Button,
    Image
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  private scrollService = inject(ScrollService);
  videoUrl = '/video_360p.mp4'

  scrollToService = () => this.scrollService.scrollToElement("services")
}
