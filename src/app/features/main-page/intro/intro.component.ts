import { Component } from '@angular/core';
import {Image} from 'primeng/image';
import {AnimateOnScroll} from "primeng/animateonscroll";
import {Card} from "primeng/card";
import {TranslatePipe} from "@ngx-translate/core";
import {ICard} from '@shared/models';

@Component({
  selector: 'xs-main-page-intro',
    imports: [
        Image,
        AnimateOnScroll,
        Card,
        TranslatePipe
    ],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
  standalone: true
})
export class IntroComponent {
  services: ICard[] = [
    { title: 'programs.prepSub.title', description: 'programs.prepSub.slogan', image: '/images/lessons.png' },
    { title: 'programs.interview.title', description: 'programs.interview.slogan', image: '/images/interview.png' },
    { title: 'programs.camp.title', description: 'programs.camp.slogan', image: '/images/camp.png'},
    { title: 'programs.exam.title', description: 'programs.exam.slogan', image: '/images/exam.png'}
  ];
}
