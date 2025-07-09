import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {StepperModule} from 'primeng/stepper';

@Component({
  selector: 'xs-acquire-knowledge-test',
  templateUrl: './test.component.html',
  imports: [
    ButtonModule,
    StepperModule
  ],
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

}
