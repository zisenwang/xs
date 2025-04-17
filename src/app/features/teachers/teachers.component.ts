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

@Component({
  selector: 'xs-teachers',
  imports: [BgTitleComponent, TranslatePipe, ProfileCardListComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent {
  protected readonly title = TEACHERS_TITLE;
  protected readonly subtitle = TEACHERS_SUBTITLE;
  protected readonly bgUrl = BG_TEACHERS_URL;
  teachers: IProfile[] = [
    {
      name: 'Dr. Kevin Chen，牛津大学工程科学硕士，固体力学及应用数学博士',
      badge: '/images/logo_oxi.png',
      details: [
        '北京衡峰教育学科培训负责人，物理工程竞赛教练，',
        '协助大量学生申请主流英国大学，如PAT 2019-2021年都曾担任导师。',
        '10年+奥数/竞赛教学经验，所带超过100+中学生斩获个人牛剑offer。',
      ],
    },
    {
      name: 'Jo Hu，剑桥大学经济学本科',
      badge: '/images/logo_cam.png',
      details: [
        '北京衡峰教育招生负责人，',
        '剑桥大学本科在校期间主修计量经济方向，并为剑桥本科阶段的高年级学术研究助理，',
        '有多年参与国际课程教学和升学指导经验，知悉中英学制差异与衔接。',
      ],
    },
    {
      name: 'Li，牛津大学数学系本科',
      badge: '/images/logo_oxi.png',
      details: [
        '北京衡峰教育中学部主管，',
        '授课内容覆盖STEP，MAT，AMC高难度竞赛，',
        '辅导多年剑桥和牛津数学类方向申请。',
      ],
    },
    {
      name: 'Dr. Laura Yuan，剑桥大学自然科学硕士、剑桥大学学术学位博士',
      badge: '/images/logo_cam.png',
      details: [
        '北京衡峰教育中学部负责人，',
        '5年以上中学G5生物和物理竞赛课程经验。',
      ],
    },
    {
      name: 'Christian，牛津大学化学系本科',
      badge: '/images/logo_oxi.png',
      details: [
        '北京衡峰教育中学部负责人，',
        '累计编写授课教案1000小节，辅导大量申请方向集中在理科类专业。',
      ],
    },
  ];
}
