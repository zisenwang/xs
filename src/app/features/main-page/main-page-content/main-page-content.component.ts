import { Component } from '@angular/core';
import {BannerComponent} from "@app/features/main-page/banner/banner.component";
import {BusinessComponent} from "@app/features/main-page/business/business.component";
import {FooterComponent} from "@app/features/main-page/footer/footer.component";
import {IntroComponent} from "@app/features/main-page/intro/intro.component";
import {TestimonialsComponent} from "@app/features/main-page/testimonials/testimonials.component";

@Component({
  selector: 'xs-main-page-content',
    imports: [
        BannerComponent,
        BusinessComponent,
        FooterComponent,
        IntroComponent,
        TestimonialsComponent
    ],
  templateUrl: './main-page-content.component.html',
  styleUrl: './main-page-content.component.scss'
})
export class MainPageContentComponent {

}
