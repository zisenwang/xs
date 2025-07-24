import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {StepperModule} from 'primeng/stepper';
import {
  Question,
  QuestionTemplateComponent
} from '@app/features/ai/acquire-knowledge/test/question-template/question-template.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'xs-acquire-knowledge-test',
  templateUrl: './test.component.html',
  imports: [
    ButtonModule,
    StepperModule,
    QuestionTemplateComponent,
    NgClass
  ],
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Output() submitAnswer = new EventEmitter<any>();
  currentStep = 1;

  questions: Question[] = [
    {
      id: 1,
      title: 'By using the definition of the derivative, find the derivative of sin(x) and cos(x)',
    },
    {
      id: 2,
      title: 'Prove that √2 is not a rational number',
    },
    {
      id: 3,
      title: 'Solve the equation 2x + 3y = 10',
    }
  ];

  submit() {
    this.submitAnswer.emit();
  }
}
