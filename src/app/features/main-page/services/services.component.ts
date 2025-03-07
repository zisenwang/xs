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
    { title: '考试备考', description: '专业辅导，提升成绩', image: '/prepare_test.png' },
    { title: '大学申请', description: '名校申请，面试辅导', image: '/interview_prep.png' },
    { title: 'AI 智能教育', description: '个性化学习，效率提升', image: '/ai_edu.png'}
  ];

}
