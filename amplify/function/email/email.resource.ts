import {defineFunction} from '@aws-amplify/backend';

export const sendEmail = defineFunction({
  entry: './handler.ts',
})
