import { Component } from '@angular/core';

@Component({
  selector: 'xs-main-page-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    { title: 'University Applications', description: 'We help you prepare and submit your application.' },
    { title: 'Interview Preparation', description: 'Ace your university interviews with our guidance.' },
    { title: 'Personal Statement Reviews', description: 'Receive personalized feedback on your statements.' }
  ];

}
