import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LANG_EN, LANG_ZH_CN } from '@shared/constants';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FoundationEnComponent} from '@app/features/products/foundation/en/foundation-en.component';
import {FoundationChComponent} from '@app/features/products/foundation/ch/foundation-ch.component';

@Component({
  selector: 'xs-products-foundation',
  imports: [
    FoundationEnComponent,
    FoundationChComponent
  ],
  templateUrl: './foundation.component.html',
  styleUrl: './foundation.component.scss',
  standalone: true,
})
export class FoundationComponent implements OnInit {
  private translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);
  currentLang =
    this.translate.currentLang || this.translate.getDefaultLang() || LANG_ZH_CN;
  protected readonly LANG_EN = LANG_EN;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;

  ngOnInit() {
    this.translate.onLangChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}
