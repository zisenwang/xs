import { Component } from '@angular/core';
import {Image} from 'primeng/image';
import {AnimateOnScroll} from "primeng/animateonscroll";
import {Card} from "primeng/card";
import {TranslatePipe} from "@ngx-translate/core";

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
  services = [
    { title: 'programs.prepSub.title', description: 'programs.prepSub.slogan', image: '/lessons.png' },
    { title: 'programs.interview.title', description: 'programs.interview.slogan', image: '/interview.png' },
    { title: 'programs.camp.title', description: 'programs.camp.slogan', image: '/camp.png'},
    { title: 'programs.exam.title', description: 'programs.exam.slogan', image: '/exam.png'}
  ];
}
