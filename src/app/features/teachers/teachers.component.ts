import { Component } from '@angular/core';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import {
  BG_TEACHERS_URL,
  TEACHERS_SUBTITLE,
  TEACHERS_TITLE,
} from '@shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import {
  IProfile,
  ProfileCardListComponent,
} from '@shared/components/profile-card-list/profile-card-list.component';
import {TEACHERS} from '@app/features/teachers/teachers.constants';

@Component({
  selector: 'xs-teachers',
  imports: [BgTitleComponent, TranslatePipe, ProfileCardListComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
  standalone: true,
})
export class TeachersComponent {
  protected readonly title = TEACHERS_TITLE;
  protected readonly subtitle = TEACHERS_SUBTITLE;
  protected readonly bgUrl = BG_TEACHERS_URL;
  protected readonly teachers: IProfile[] = TEACHERS
}
