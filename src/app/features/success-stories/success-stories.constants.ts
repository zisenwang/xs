import {IProfile} from '@shared/components/profile-card-list/profile-card-list.component';
import {LOGO_CAMBRIDGE_URL, LOGO_OXIFORD_URL} from '@shared/constants';

export const STUDENTS: IProfile[] = [
  {
    name: 'successStories.yu.name',
    badge: LOGO_CAMBRIDGE_URL,
    details: [
      'successStories.yu.intro1',
      'successStories.yu.intro2',
      'successStories.yu.intro3',
    ],
  },
  {
    name: 'successStories.shi.name',
    badge: LOGO_CAMBRIDGE_URL,
    details: [
      'successStories.shi.intro1',
      'successStories.shi.intro2',
      'successStories.shi.intro3',
    ],
  },
  {
    name: 'successStories.xu.name',
    badge: LOGO_OXIFORD_URL,
    details: [
      'successStories.xu.intro1',
      'successStories.xu.intro2',
      'successStories.xu.intro3',
    ],
  },
];
