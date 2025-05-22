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
    wechat:['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.email],
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
      await this.sendEmail(params);
      await this.addMessage(params);
      this.popSuccessMessage();
      this.contactForm.reset();
    } catch (error) {
      console.log(error);
      this.popErrorMessage(error as string)
    }
  }


  private async addMessage(params: typeof this.contactForm.value){
    const {errors} = await this.client.models.ConsultMessage.create({...params, timestamp: new Date().toISOString(), done: false});
    if (errors) {
      throw new Error(errors[0].message);
    }
  }
  private async sendEmail(params: typeof this.contactForm.value){
    const {errors} = await this.client.queries.sendEmail({
      params
    })
    if (errors) {
      throw new Error(errors[0].message);
    }
  }

  private popSuccessMessage(){
    this.messageService.add({severity:'success', summary:'Success', detail:'Your message has been sent, we will contact you soon'});
  }

  private popErrorMessage(error: string){
    this.messageService.add({severity:'error', summary:'Failed', detail:error});
  }
}
