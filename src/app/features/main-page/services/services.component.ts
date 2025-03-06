import { Component } from '@angular/core';
import {CardModule} from 'primeng/card';
import { AnimateOnScrollModule} from 'primeng/animateonscroll';

@Component({
  selector: 'xs-main-page-services',
  imports: [
    CardModule,
    AnimateOnScrollModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  standalone: true
})
export class ServicesComponent {
  services = [
    { title: 'University Applications', description: 'We help you prepare and submit your application.' },
    { title: 'Interview Preparation', description: 'Ace your university interviews with our guidance.' },
    { title: 'Personal Statement Reviews', description: 'Receive personalized feedback on your statements.' }
  ];

}
