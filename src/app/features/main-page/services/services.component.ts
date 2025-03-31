import {Component, ViewEncapsulation} from '@angular/core';
import {CardModule} from 'primeng/card';
import { AnimateOnScrollModule} from 'primeng/animateonscroll';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'xs-main-page-services',
  imports: [
    CardModule,
    AnimateOnScrollModule,
    TranslatePipe
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  services = [
    { title: 'programs.prepSub.title', description: 'programs.prepSub.slogan', image: '/lessons.png' },
    { title: 'programs.interview.title', description: 'programs.interview.slogan', image: '/interview.png' },
    { title: 'programs.camp.title', description: 'programs.camp.slogan', image: '/camp.png'},
    { title: 'programs.exam.title', description: 'programs.exam.slogan', image: '/exam.png'}
  ];

}
