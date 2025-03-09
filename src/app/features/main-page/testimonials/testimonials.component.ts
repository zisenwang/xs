import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {Card} from 'primeng/card';
import {Carousel} from 'primeng/carousel';
import {Divider} from 'primeng/divider';

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
    Divider
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  standalone: true
})
export class TestimonialsComponent {
  successCases: SuccessCase[] = [
    {
      studentName: '张同学',
      studentImage: '/student1.png',
      admittedSchool: '剑桥大学',
      major: '计算机科学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。'
    },
    {
      studentName: '赵同学',
      studentImage: '/student1.png',
      admittedSchool: '剑桥大学',
      major: '计算机科学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。'
    },
    {
      studentName: '孙同学',
      studentImage: '/student1.png',
      admittedSchool: '剑桥大学',
      major: '计算机科学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。'
    },
    {
      studentName: '李同学',
      studentImage: '/student1.png',
      admittedSchool: '剑桥大学',
      major: '计算机科学',
      background: 'GPA 3.8 | A-LEVEL | STEP',
      testimonial: '感谢老师们的悉心指导，让我能够实现留学梦想。'
    },
  ];

  statistics = [
    { value: '98%', label: '录取率' },
    { value: '1000+', label: '成功案例' },
    { value: '50+', label: '合作院校' }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];


}
