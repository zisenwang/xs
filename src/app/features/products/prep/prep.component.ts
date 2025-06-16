import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LANG_EN, LANG_ZH_CN } from '@shared/constants';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PrepEnComponent} from '@app/features/products/prep/en/prep-en.component';
import {PrepChComponent} from '@app/features/products/prep/ch/prep-ch.component';

@Component({
  selector: 'xs-products-prep',
  imports: [
    PrepEnComponent,
    PrepChComponent
  ],
  templateUrl: './prep.component.html',
  styleUrl: './prep.component.scss',
  standalone: true,
})
export class PrepComponent implements OnInit {
  private translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef)
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
