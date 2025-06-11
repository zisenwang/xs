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
  standalone: true,
})
export class SuccessStoriesComponent {
  title = TESTIMONIALS_SUCCESS_STORIES;
  subtitle = TESTIMONIALS_SLOGAN;
  bgUrl = BG_TEACHERS_URL;
  students: IProfile[] = [
    {
      name: '喻同学，剑桥工程系录取',
      badge: LOGO_CAMBRIDGE_URL,
      details: [
        '在Kevin导师的长期指导下，该生从高一起明确以物理为方向，提前自学大学课程，并积极参与科研项目，打下坚实的学术基础。',
        '备考阶段系统刷题、提升面试表现，Kevin不仅提供丰富的资源和选校建议，还安排与目标院校学长学姐的一对一模拟面试，助力学生在正式场合自信应对。',
        '凭借对专业的热情、自学积累与全面准备，该生顺利斩获英国G5名校Offer，实现名校梦想。',
      ],
    },
    {
      name: '史同学，剑桥大工程系录取',
      badge: LOGO_CAMBRIDGE_URL,
      details: [
        '2023年参加修斯夏令营，在修斯系统辅导下，该生成功斩获剑桥大学工程系录取。',
        '通过牛剑夏令营、笔试刷题与面试训练，全面提升数学物理能力与应试表现。',
        '文书打磨结合工程拓展阅读，精准展现学术热情与专业潜力。',
      ],
    },
    {
      name: '徐同学，牛津工程系录取',
      badge: LOGO_OXIFORD_URL,
      details: [
        '在Kevin导师的指导下，该生用一年时间夯实基础，AS阶段完成多项主流竞赛，逐步构建学术优势。',
        '通过阅读导师推荐的电子电气工程书籍和工程视频，明确了专业方向，并系统准备PAT与ENGAA笔试，刷完历年真题打下扎实基础。',
        '在Kevin引荐下，多次与牛津学长学姐进行模拟面试，深入思考启发性题目，最终成功获得牛津大学工程系录取。',
      ],
    },
  ];
}
