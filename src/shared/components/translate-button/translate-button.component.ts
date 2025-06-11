import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LANG_EN, LANG_ZH_CN } from '@shared/constants';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'xs-shared-translate-button',
  imports: [TranslatePipe, ToggleSwitch, FormsModule],
  templateUrl: './translate-button.component.html',
  styleUrl: './translate-button.component.scss',
  standalone: true,
})
export class TranslateButtonComponent implements OnInit {
  private translate = inject(TranslateService);
  protected readonly LANG_EN = LANG_EN;
  protected readonly LANG_ZH_CN = LANG_ZH_CN;

  currentLang = this.translate.currentLang;
  isCurrentLangEn = false;

  ngOnInit() {
    this.currentLang =
      this.translate.currentLang ||
      this.translate.getDefaultLang() ||
      LANG_ZH_CN;
    this.isCurrentLangEn = this.currentLang === LANG_EN;
  }

  selectLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  changeLang() {
    this.translate.use(this.currentLang === LANG_ZH_CN ? LANG_EN : LANG_ZH_CN);
    this.currentLang = this.currentLang === LANG_ZH_CN ? LANG_EN : LANG_ZH_CN;
  }
}
