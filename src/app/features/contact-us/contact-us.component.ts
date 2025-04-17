import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import { BG_CONTACT_US_URL, CONTACT_US_TITLE } from '@shared/constants';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'xs-contact-us',
  imports: [ReactiveFormsModule, BgTitleComponent, TranslatePipe],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  protected readonly title = CONTACT_US_TITLE;
  protected readonly bgUrl = BG_CONTACT_US_URL;
  contactForm: FormGroup;

  tuitionOptions = ['物理工程', '数学', '生物', '化学', '经济'];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      tuitionFor: [''],
      trial: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Thank you! Well contact you soon.');
    } else {
      alert('Please complete the required fields.');
    }
  }
}
