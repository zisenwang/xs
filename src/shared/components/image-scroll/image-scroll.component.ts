import { Component } from '@angular/core';
import {Image} from 'primeng/image';

@Component({
  selector: 'xs-shared-images-scroll',
  imports: [
    Image
  ],
  templateUrl: './image-scroll.component.html',
  styleUrl: './image-scroll.component.scss',
  standalone: true
})
export class ImageScrollComponent {
  images: string[] = [
    '/images/logo_cam.png',
    '/images/logo_oxi.png',
    '/images/logo_imp.png',
    '/images/logo_ucl.png',
    '/images/logo_lse.png',
    '/images/logo_harvard.png',
    '/images/logo_yale.png',
    '/images/logo_stfd.png',
    '/images/logo_mit.png',
    '/images/logo_pu.png'
  ];

}
