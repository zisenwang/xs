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
  background: string[];
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
      studentName: 'testimonials.studentYu',
      studentImage: '/images/cambridge.png',
      admittedSchool: 'testimonials.cambridge',
      major: 'testimonials.engineer',
      background: ['testimonials.advancedCourses','G5','testimonials.interview'],
      testimonial: 'testimonials.testimonialYu',
    },
    {
      studentName: 'testimonials.studentShi',
      studentImage: '/images/cambridge.png',
      admittedSchool: 'testimonials.cambridge',
      major: 'testimonials.engineer',
      background: ['testimonials.summerCamp','PAT','testimonials.interview'],
      testimonial: 'testimonials.testimonialShi',
    },
    {
      studentName: 'testimonials.studentXu',
      studentImage: '/images/oxford.png',
      admittedSchool: 'testimonials.oxford',
      major: 'testimonials.engineer',
      background: ['PAT','ENGAA','testimonials.competitions'],
      testimonial: 'testimonials.testimonialXu',
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
