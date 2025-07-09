import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenu} from 'primeng/panelmenu';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xs-unit',
  templateUrl: './unit.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent {
  modules = [
    {
      title: '极限',
      icon: '📈',
      color: 'blue-500',
      lessons: ['极限的定义', '无穷小与无穷大'],
    },
    {
      title: '微积分',
      icon: '🔢',
      color: 'green-600',
      lessons: ['不定积分', '定积分的几何意义', '积分计算技巧','微分计算的意义'],
    },
    {
      title: '微分方程',
      icon: '📘',
      color: 'indigo-500',
      lessons: ['一阶线性方程', '可分离变量法','二阶微分方程'],
    },
    {
      title: '泰勒展开',
      icon: '🔍',
      color: 'purple-500',
      lessons: ['泰勒级数', '展开式的误差估计','展开变形'],
    },
  ];
}
