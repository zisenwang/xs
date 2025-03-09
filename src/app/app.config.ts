import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withInMemoryScrolling, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Lara from '@primeng/themes/lara'

const BluePreset = {
  ...Lara,
  colorScheme: 'light',
  colors: {
    'blue-50': '#f5f9ff',
    'blue-100': '#d0e1fd',
    'blue-200': '#abc9fb',
    'blue-300': '#85b2f9',
    'blue-400': '#609af8',
    'blue-500': '#3b82f6',
    'blue-600': '#326fd1',
    'blue-700': '#295bad',
    'blue-800': '#204788',
    'blue-900': '#183464',
  },
  primary: {
    color: 'var(--blue-500)',
    backgroundColor: 'var(--blue-500)',
    borderColor: 'var(--blue-500)',
    hoverColor: 'var(--blue-600)',
    hoverBackgroundColor: 'var(--blue-600)',
    hoverBorderColor: 'var(--blue-600)'
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
  })

    ),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: BluePreset,
      }
    })
  ],
};


