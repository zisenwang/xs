import { Component, inject } from '@angular/core';
import { Image } from 'primeng/image';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Card } from 'primeng/card';
import { TranslatePipe } from '@ngx-translate/core';
import { ICard } from '@shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'xs-main-page-intro',
  imports: [Image, AnimateOnScroll, Card, TranslatePipe],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  standalone: true,
})
export class IntroComponent {
  private router = inject(Router);

  services: ICard[] = [
    {
      title: 'programs.prepSub.title',
      description: 'programs.prepSub.slogan',
      image: '/images/lessons.png',
      url: 'products/advanced',
    },
    {
      title: 'programs.interview.title',
      description: 'programs.interview.slogan',
      image: '/images/interview.png',
      url: 'products/interview',
    },
    {
      title: 'programs.camp.title',
      description: 'programs.camp.slogan',
      image: '/images/camp.png',
      url: 'products/sprint',
    },
    {
      title: 'programs.exam.title',
      description: 'programs.exam.slogan',
      image: '/images/exam.png',
      url: 'products/sprint',
    },
  ];

  goToProduct(url: string | undefined) {
    if (url) {
      this.router.navigate([url]);
    }
  }
}
