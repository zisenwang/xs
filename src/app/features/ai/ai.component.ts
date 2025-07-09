import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenu} from 'primeng/panelmenu';
import {AcquireKnowledgeComponent} from '@app/features/ai/acquire-knowledge/acquire-knowledge.component';
import {UnitComponent} from '@app/features/ai/unit/unit.component';

@Component({
  selector: 'xs-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss'],
  imports: [
    PanelMenu,
    AcquireKnowledgeComponent,
    UnitComponent
  ]
})
export class AiComponent {
  menuItems: MenuItem[] = [
    {
      label: '获取知识',
      icon: 'pi pi-book',
      command: () => (this.activeModule = 'get'),
    },
    {
      label: '测验',
      icon: 'pi pi-check-square',
      command: () => (this.activeModule = 'quiz'),
    },
    {
      label: '学习路径',
      icon: 'pi pi-sitemap',
      command: () => (this.activeModule = 'path'),
    },
    {
      label: '自动敦促',
      icon: 'pi pi-bell',
      command: () => (this.activeModule = 'nudges'),
    },
  ];

  /**
   * 用于控制主界面当前显示的模块。
   * get   -> 获取知识
   * quiz  -> 测验
   * path  -> 学习路径
   * nudges-> 自动敦促
   */
  activeModule: 'get' | 'quiz' | 'path' | 'nudges' = 'get';

  /**
   * 根据当前 activeModule 返回中文标题，供模板绑定使用
   */
  get activeLabel(): string {
    switch (this.activeModule) {
      case 'quiz':
        return '测验';
      case 'path':
        return '学习路径';
      case 'nudges':
        return '自动敦促';
      default:
        return '获取知识';
    }
  }
}
