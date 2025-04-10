import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {ImageScrollComponent} from '@shared/components/image-scroll/image-scroll.component';
import {ICard} from '@shared/models';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'xs-main-page-business',
  imports: [
    Card,
    ImageScrollComponent,
    TranslatePipe
  ],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
  standalone: true,
})
export class BusinessComponent {

  statistics: ICard[] = [
    { description: '30%', title: 'business.stats.ox accepted' },
    { description: '95%', title: 'business.stats.interview' },
    { description: '100+', title: 'business.stats.ox offer' },
  ];

  highlights: ICard[] = [
    {
      title: 'business.subs.exam.title',
      description: 'business.subs.exam.desc'
    },
    {
      title: 'business.subs.curriculum.title',
      description: 'business.subs.curriculum.desc'
    },
    {
      title: 'business.subs.faculty.title',
      description: 'business.subs.faculty.desc'
    },
    {
      title: 'business.subs.success.title',
      description: 'business.subs.success.desc'
    }
  ]
}
