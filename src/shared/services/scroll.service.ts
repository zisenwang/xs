// services/scroll.service.ts
import { Injectable, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);

  constructor() {
    // 设置默认偏移量
    this.setDefaultScrollOffset();
  }

  private setDefaultScrollOffset() {
    this.viewportScroller.setOffset([0, 70]);
  }

  scrollToElement(elementId: string): void {
    if (this.router.url === '/') {
      this.viewportScroller.scrollToAnchor(elementId);
    } else {
      this.router.navigate(['/'], { fragment: elementId });
    }
  }
}

export const ABC = 'a'
