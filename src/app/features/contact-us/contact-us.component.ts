import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import { BG_CONTACT_US_URL, CONTACT_US_TITLE } from '@shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { generateClient} from 'aws-amplify/api'
import type {Schema} from "../../../../amplify/data/resource"

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
  client = generateClient<Schema>()

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

  async onSubmit() {
    try {
      const {data, errors} = await this.client.queries.sendEmail({
        params:{
          firstName: 'jason',
          lastName: 'wong',
          email: 'example@example.com',
          subjects: JSON.stringify(['maths','physics']),
          message: 'hello world'
        }
      })

      console.log(data, errors)

    //   const response = await post({
    //     apiName: 'my-first-function',
    //     path:'/'
    //   }).response;
    //   console.log(response);
    } catch (error) {
      console.log(error);
    }
    // if (this.contactForm.valid) {
    //   console.log(this.contactForm.value);
    //   alert('Thank you! Well contact you soon.');
    // } else {
    //   alert('Please complete the required fields.');
    // }
  }
}
