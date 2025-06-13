import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { LANG_EN, LANG_ZH_CN } from '@shared/constants';
import {SprintChComponent} from '@app/features/products/sprint/ch/sprint-ch.component';
import {SprintEnComponent} from '@app/features/products/sprint/en/sprint-en.component';


@Component({
  selector: 'xs-products-sprint',
  imports: [
    SprintChComponent,
    SprintEnComponent
  ],
  templateUrl: './sprint.component.html',
  styleUrl: './sprint.component.scss',
  standalone: true,
})
export class SprintComponent implements OnInit {
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
