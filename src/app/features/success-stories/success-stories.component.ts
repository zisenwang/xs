import { Component } from '@angular/core';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import {
  ProfileCardListComponent,
} from '@shared/components/profile-card-list/profile-card-list.component';
import { TranslatePipe } from '@ngx-translate/core';
import {
  BG_TEACHERS_URL,
  TESTIMONIALS_SLOGAN,
  TESTIMONIALS_SUCCESS_STORIES,
} from '@shared/constants';
import {STUDENTS} from '@app/features/success-stories/success-stories.constants';

@Component({
  selector: 'xs-success-stories',
  imports: [BgTitleComponent, ProfileCardListComponent, TranslatePipe],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss',
  standalone: true,
})
export class SuccessStoriesComponent {
  title = TESTIMONIALS_SUCCESS_STORIES;
  subtitle = TESTIMONIALS_SLOGAN;
  bgUrl = BG_TEACHERS_URL;
  students = STUDENTS;
}
