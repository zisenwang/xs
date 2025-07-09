import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenu} from 'primeng/panelmenu';

@Component({
  selector: 'xs-acquire-knowledge-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  units: string[] = ['极限', '微积分', '微分方程', '泰勒展开'];
}
