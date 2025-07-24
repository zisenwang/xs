// question.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Button} from 'primeng/button';

export interface Question {
  id: number;
  title?: string;
  imagePath?: string;
}

@Component({
  selector: 'xs-question-template',
  templateUrl: './question-template.component.html',
  imports: [
    Button
  ],
  styleUrl: './question-template.component.scss'
})
export class QuestionTemplateComponent {
  @Input() question!: Question;
  @Input() isFirst = false;
  @Input() isLast = false;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  uploadedImage: string | null = null;

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }

  private handleFile(file: File): void {
    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.uploadedImage = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}
