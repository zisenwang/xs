import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LANG_EN, LANG_ZH_CN } from '@shared/constants';
import { AdvancedEnComponent } from '@app/features/products/advanced/en/advanced-en.component';
import { AdvancedChComponent } from '@app/features/products/advanced/ch/advanced-ch.component';

@Component({
  selector: 'xs-products-advanced',
  imports: [AdvancedEnComponent, AdvancedChComponent],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.scss',
  standalone: true,
})
export class AdvancedComponent implements OnInit {
  private translate = inject(TranslateService);
  currentLang =
    this.translate.currentLang || this.translate.getDefaultLang() || LANG_ZH_CN;
  protected readonly LANG_EN = LANG_EN;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;

  ngOnInit() {
    this.translate.onLangChange.pipe(takeUntilDestroyed()).subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}
