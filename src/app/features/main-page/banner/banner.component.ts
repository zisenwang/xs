import { Component, inject } from '@angular/core';
import { ScrollService } from '@shared/services';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'xs-main-page-banner',
  imports: [TranslatePipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  standalone: true,
})
export class BannerComponent {
  private scrollService = inject(ScrollService);
  videoUrl = '/video/video_360p.mp4';
  backgroundImageUrl = '/images/maxresdefault.jpg';

  scrollToService = () => this.scrollService.scrollToElement('intro');
}
