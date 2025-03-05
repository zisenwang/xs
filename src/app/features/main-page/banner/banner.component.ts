import {Component, inject, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Image} from 'primeng/image';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'xs-main-page-banner',
  imports: [
    Button,
    Image
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  safeVideoUrl!: SafeResourceUrl;
  isLoading = true;
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    const videoId = 'SfhSIWzmgLE';
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&modestbranding=1`;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.isLoading = true;
  }

  onVideoLoad() {
    this.isLoading = false;
  }
}
