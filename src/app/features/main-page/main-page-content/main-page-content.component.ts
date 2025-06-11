import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BannerComponent } from '@app/features/main-page/banner/banner.component';
import { BusinessComponent } from '@app/features/main-page/business/business.component';
import { FooterComponent } from '@app/features/main-page/footer/footer.component';
import { IntroComponent } from '@app/features/main-page/intro/intro.component';
import { TestimonialsComponent } from '@app/features/main-page/testimonials/testimonials.component';
import { ScrollService } from '@shared/services';

@Component({
  selector: 'xs-main-page-content',
  imports: [
    BannerComponent,
    BusinessComponent,
    FooterComponent,
    IntroComponent,
    TestimonialsComponent,
  ],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss',
  standalone: true,
})
export class MainPageContentComponent implements AfterViewInit {
  private elementRef = inject(ElementRef);
  private scrollService = inject(ScrollService);

  private currentSectionIndex = 0;
  private sections: string[] = [];

  ngAfterViewInit() {
    this.retrieveSectionName();
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = this.currentSectionIndex + direction;

    if (nextIndex >= 0 && nextIndex < this.sections.length) {
      this.scrollToSection(nextIndex);
    }
  }

  private scrollToSection(index: number) {
    const sectionName = this.sections[index];
    const scrollSuccess = this.scrollService.scrollToElement(sectionName);
    if (scrollSuccess) {
      this.currentSectionIndex = index;
    }
  }

  private retrieveSectionName() {
    this.sections = Array.from(
      this.elementRef.nativeElement.querySelectorAll('[scrollSection]')
    )
      .map(section => {
        const element = section as HTMLElement;
        const firstChild = element.firstElementChild;
        return firstChild ? firstChild.id : null;
      })
      .filter(id => id !== null);
  }
}
