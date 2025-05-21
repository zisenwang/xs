import { Component } from '@angular/core';
import {
  ABOUT_US_SUBTITLE,
  BG_ABOUT_US_URL,
  COMPANY_FULL_NAME,
} from '@shared/constants';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import { TranslatePipe } from '@ngx-translate/core';
import {Card} from 'primeng/card';
import {FEATURES} from '@app/features/about-us/about-us.constants';

@Component({
  selector: 'xs-about-us',
  imports: [BgTitleComponent, TranslatePipe, Card],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  protected readonly bgUrl = BG_ABOUT_US_URL;
  protected readonly title = COMPANY_FULL_NAME;
  protected readonly subtitle = ABOUT_US_SUBTITLE;
  protected readonly features = FEATURES;
}
