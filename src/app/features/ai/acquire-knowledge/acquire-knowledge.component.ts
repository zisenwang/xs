import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenu} from 'primeng/panelmenu';
import {Card} from 'primeng/card';
import {TestComponent} from '@app/features/ai/acquire-knowledge/test/test.component';

@Component({
  selector: 'xs-acquire-knowledge',
  templateUrl: './acquire-knowledge.component.html',
  imports: [
    Card,
    TestComponent
  ],
  styleUrls: ['./acquire-knowledge.component.scss']
})
export class AcquireKnowledgeComponent {
  selection: 'test' | 'customised' | '' = '';

  changeSelection(selection: 'test' | 'customised' | ''){
    this.selection = selection;
  }
}
