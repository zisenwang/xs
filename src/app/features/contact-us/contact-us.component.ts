import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import { BG_CONTACT_US_URL, CONTACT_US_TITLE } from '@shared/constants';
import { TranslatePipe } from '@ngx-translate/core';
import { generateClient} from 'aws-amplify/api'
import type {Schema} from "../../../../amplify/data/resource"
import {Button} from 'primeng/button';
import {Toast} from 'primeng/toast';
import {InputText} from 'primeng/inputtext';
import {Textarea} from 'primeng/textarea';
import {MessageService} from 'primeng/api';
import {Message} from 'primeng/message';
import {NgClass} from '@angular/common';
import {Checkbox} from 'primeng/checkbox';

@Component({
  selector: 'xs-contact-us',
  imports: [
    ReactiveFormsModule,
    BgTitleComponent,
    TranslatePipe,
    Button, Toast, InputText, Textarea, Message, NgClass, Checkbox],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  providers: [MessageService]
})
export class ContactUsComponent {
  protected readonly title = CONTACT_US_TITLE;
  protected readonly bgUrl = BG_CONTACT_US_URL;

  private messageService = inject(MessageService);
  contactForm: FormGroup;
  client = generateClient<Schema>();


  tuitionOptions = ['物理工程', '数学', '生物', '化学', '经济'];


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subjects: [''],
      contactDetail: ['', Validators.required],
      message: [''],
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      console.log(this.contactForm)
      this.messageService.add({severity:'error', summary:'Failed', detail:'Some fields are missing'});
      return;
    }
    this.messageService.add({severity:'success', summary:'Success', detail:'Your message has been sent, we will contact you soon'});
    // try {
    //   const {data, errors} = await this.client.queries.sendEmail({
    //     params:{
    //       firstName: 'jason',
    //       lastName: 'wong',
    //       email: 'example@example.com',
    //       subjects: JSON.stringify(['maths','physics']),
    //       message: 'hello world'
    //     }
    //   })
    //   console.log(data, errors)
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
