import { Component } from '@angular/core';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import {
  IProfile,
  ProfileCardListComponent,
} from '@shared/components/profile-card-list/profile-card-list.component';
import { TranslatePipe } from '@ngx-translate/core';
import {
  BG_TEACHERS_URL,
  LOGO_CAMBRIDGE_URL,
  LOGO_OXIFORD_URL,
  TESTIMONIALS_SLOGAN,
  TESTIMONIALS_SUCCESS_STORIES,
} from '@shared/constants';

@Component({
  selector: 'xs-success-stories',
  imports: [BgTitleComponent, ProfileCardListComponent, TranslatePipe],
  templateUrl: './success-stories.component.html',
  styleUrl: './success-stories.component.scss',
})
export class SuccessStoriesComponent {
  title = TESTIMONIALS_SUCCESS_STORIES;
  subtitle = TESTIMONIALS_SLOGAN;
  bgUrl = BG_TEACHERS_URL;
  students: IProfile[] = [
    {
      name: '刘雨晨，Hills优秀学员，剑桥工程系录取',
      badge: LOGO_CAMBRIDGE_URL,
      details: [
        '2023年参加未来谷A-Level数学强化班，最终考获A*，物理竞赛获英国物理挑战赛金奖',
        '在未来谷导师指导下完成机器人创新项目，获得英国青年科学家大赛银奖提名',
        '经过系统性的面试培训，成功斩获UCL、IC、爱丁堡等名校offer，规划未来走向半导体行业',
      ],
    },
    {
      name: '赵同学，Hills培训优秀学员，牛津工程系录取',
      badge: LOGO_OXIFORD_URL,
      details: [
        '2023年参加未来谷A-Level数学强化班，最终考获A*，物理竞赛获英国物理挑战赛金奖',
        '在未来谷导师指导下完成机器人创新项目，获得英国青年科学家大赛银奖提名',
        '经过系统性的面试培训，成功斩获UCL、IC、爱丁堡等名校offer，规划未来走向半导体行业',
      ],
    },
  ];
}
