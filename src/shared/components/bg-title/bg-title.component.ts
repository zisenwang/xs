import {Component, Input,} from '@angular/core';
import { Image } from 'primeng/image';

@Component({
  selector: 'xs-shared-bg-title',
  imports: [Image],
  templateUrl: './bg-title.component.html',
  styleUrl: './bg-title.component.scss',
  standalone: true,
})
export class BgTitleComponent {
  @Input({required: true}) title = 'title'
  @Input({required: true}) bgUrl!: string;
  @Input() subtitle?: string;
}
