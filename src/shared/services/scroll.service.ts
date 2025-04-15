import { Injectable } from '@angular/core';
import {HEADER_SECTOR, SCROLLING_TIMEOUT} from '@shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {

  private isScrolling = false;

  private getHeaderHeight(): number {
    const header = document.getElementById(HEADER_SECTOR);
    return header ? header.getBoundingClientRect().height : 0;
  }

  scrollToElement(elementId: string): Boolean {
    if (this.isScrolling) return false;

    this.isScrolling = true;
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = this.getHeaderHeight();
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setTimeout(() => {
        this.isScrolling = false;
      }, SCROLLING_TIMEOUT)
    }

    return true;
  }
}
