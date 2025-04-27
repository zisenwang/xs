import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { BgTitleComponent } from '@shared/components/bg-title/bg-title.component';
import {
  BG_CONTACT_US_URL,
  CONTACT_US_TITLE
} from '@shared/constants';
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
import {TUITION_OPTIONS} from '@app/features/contact-us/contact-us.data';

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
  protected readonly tuitionOptions = TUITION_OPTIONS;

  private messageService = inject(MessageService);
  private fb = inject(FormBuilder);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    subjects: [''],
    contactDetail: ['', Validators.required],
    message: [''],
  });
  client = generateClient<Schema>();



  async onSubmit() {
    if (this.contactForm.invalid) {
      console.log(this.contactForm);
      this.popErrorMessage('Please fill in the required fields');
      return;
    }

    try {
      const params = { ...this.contactForm.value, subjects: JSON.stringify(this.contactForm.value.subjects)  }
      const {data, errors} = await this.client.queries.sendEmail({
        params,
      })
      console.log(data, errors)
      if (errors) {
        this.popErrorMessage(errors[0].message)
      }
      if (!errors) {
        this.popSuccessMessage()
      }
    } catch (error) {
      console.log(error);
      this.popErrorMessage(error as string)
    }
  }

  private popSuccessMessage(){
    this.messageService.add({severity:'success', summary:'Success', detail:'Your message has been sent, we will contact you soon'});
  }

  private popErrorMessage(error: string){
    this.messageService.add({severity:'error', summary:'Failed', detail:error});
  }
}
