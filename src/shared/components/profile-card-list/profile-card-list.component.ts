import { Component, Input } from '@angular/core';
import { Image } from 'primeng/image';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Card } from 'primeng/card';
import {TranslatePipe} from '@ngx-translate/core';

export interface IProfile {
  name: string;
  badge: string;
  details: string[];
}

@Component({
  selector: 'xs-shared-profile-card-list',
  imports: [Image, AnimateOnScroll, Card, TranslatePipe],
  templateUrl: './profile-card-list.component.html',
  styleUrl: './profile-card-list.component.scss',
  standalone: true,
})
export class ProfileCardListComponent {
  @Input({ required: true }) profile: IProfile[] = [];
}
