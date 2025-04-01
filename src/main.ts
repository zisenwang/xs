import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { AppComponent } from '@app/app.component';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import {enableProdMode} from '@angular/core';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Amplify.configure(outputs);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
