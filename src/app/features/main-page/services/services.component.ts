import {Component, ViewEncapsulation} from '@angular/core';
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
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent {
  services = [
    { title: '学科先修课程', description: '超前学习，回归知识本质', image: '/lessons.png' },
    { title: '笔试面试辅导', description: '牛剑针对性训练，考官角度看待名校申请', image: '/interview.png' },
    { title: '暑期集训营', description: '查漏补缺，短时间内提高学科素养', image: '/camp.png'},
    { title: '竞赛/标化考试', description: '系统备考，精准提分', image: '/exam.png'}
  ];

}
