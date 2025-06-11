import { INameValuePair } from '@shared/models';
import {
  APP_SUBJECTS_BIOLOGY,
  APP_SUBJECTS_CHEMISTRY,
  APP_SUBJECTS_ECONOMY,
  APP_SUBJECTS_ENGINEERING_PHYSICS,
  APP_SUBJECTS_MATHS,
} from '@shared/constants';

export const TUITION_OPTIONS: INameValuePair[] = [
  {
    name: APP_SUBJECTS_ENGINEERING_PHYSICS,
    value: 'physics',
  },
  {
    name: APP_SUBJECTS_MATHS,
    value: 'maths',
  },
  {
    name: APP_SUBJECTS_BIOLOGY,
    value: 'biology',
  },
  {
    name: APP_SUBJECTS_CHEMISTRY,
    value: 'chemistry',
  },
  {
    name: APP_SUBJECTS_ECONOMY,
    value: 'economy',
  },
];
