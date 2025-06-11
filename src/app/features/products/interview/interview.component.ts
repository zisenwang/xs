import {Component, inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANG_EN, LANG_ZH_CN} from '@shared/constants';
import {InterviewEnComponent} from '@app/features/products/interview/en/interview-en.component';
import {InterviewChComponent} from '@app/features/products/interview/ch/interview-ch.component';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'xs-products-interview',
  imports: [
    InterviewEnComponent,
    InterviewChComponent
  ],
  templateUrl: './interview.component.html',
  styleUrl: './interview.component.scss',
  standalone: true,
})
export class InterviewComponent implements OnInit {
  private translate = inject(TranslateService);
  currentLang = this.translate.currentLang || this.translate.getDefaultLang() || LANG_ZH_CN;
  protected readonly LANG_EN = LANG_EN;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;

  ngOnInit() {
    this.translate.onLangChange.pipe(takeUntilDestroyed()).subscribe(event => {
      this.currentLang = event.lang;
    })
  }
}
