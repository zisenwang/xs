import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Card } from 'primeng/card';
import { Carousel } from 'primeng/carousel';
import { Divider } from 'primeng/divider';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { TranslatePipe } from '@ngx-translate/core';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import {
  BG_ABOUT_US_URL,
  TESTIMONIALS_SLOGAN,
  TESTIMONIALS_SUCCESS_STORIES,
} from '@shared/constants';
import { Router } from '@angular/router';

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
    BgTitleComponent,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  standalone: true,
})
export class TestimonialsComponent {
  private router = inject(Router);

  successCases: SuccessCase[] = [
    {
      studentName: '喻同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '工程',
      background: '高阶课程 | G5 | 面试',
      testimonial: '感谢Kevin老师的悉心指导，让我能够实现名校梦想。',
    },
    {
      studentName: '史同学',
      studentImage: '/images/cambridge.png',
      admittedSchool: '剑桥大学',
      major: '工程',
      background: '夏令营 | PAT | 面试',
      testimonial: '修斯教育给我系统性的学习与指导，让我收获剑桥Offer。',
    },
    {
      studentName: '徐同学',
      studentImage: '/images/oxford.png',
      admittedSchool: '牛津大学',
      major: '工程',
      background: 'PAT | ENGAA | 竞赛',
      testimonial: '感谢修斯教育指引我竞赛之路，助力名校申请。',
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
  protected readonly BG_ABOUT_US_URL = BG_ABOUT_US_URL;
  protected readonly TESTIMONIALS_SUCCESS_STORIES =
    TESTIMONIALS_SUCCESS_STORIES;
  protected readonly TESTIMONIALS_SLOGAN = TESTIMONIALS_SLOGAN;

  goToCase() {
    this.router.navigate(['/success-stories']);
  }
}
