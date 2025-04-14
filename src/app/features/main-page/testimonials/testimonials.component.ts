import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Card } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
import { Divider } from 'primeng/divider';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TranslatePipe } from '@ngx-translate/core';

interface SuccessCase {
  studentName: string;
  studentImage: string;
  admittedSchool: string;
  major: string;
  background: string;
  testimonial: string;
}

@Component({
  selector: 'xs-main-page-testimonials',
  imports: [
    FormsModule,
    DropdownModule,
    Card,
    Carousel,
    Divider,
    AnimateOnScrollModule,
    TranslatePipe,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  standalone: true,
})
export class TestimonialsComponent {
  successCases: SuccessCase[] = [
    {
      studentName: '张同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '数学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。',
    },
    {
      studentName: '赵同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '物理',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。',
    },
    {
      studentName: '孙同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '工程',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。',
    },
    {
      studentName: '李同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '化学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
