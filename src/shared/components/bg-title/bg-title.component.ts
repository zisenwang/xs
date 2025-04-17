import {Component, Input,} from '@angular/core';
import { Image } from 'primeng/image';
import {AnimateOnScroll} from 'primeng/animateonscroll';

@Component({
  selector: 'xs-shared-bg-title',
  imports: [Image, AnimateOnScroll],
  templateUrl: './bg-title.component.html',
  styleUrl: './bg-title.component.scss',
  standalone: true,
})
export class BgTitleComponent {
  @Input({required: true}) title = 'title'
  @Input({required: true}) bgUrl!: string;
  @Input() subtitle?: string;
  @Input() isScroll = false;
}
