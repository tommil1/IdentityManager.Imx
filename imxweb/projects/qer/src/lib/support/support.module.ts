import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoeContactComponent } from './coe-contact/coe-contact.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [
    CoeContactComponent,
    InstructionsComponent,
    NewsletterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoeContactComponent,
    InstructionsComponent,
    NewsletterComponent
  ]
})
export class SupportModule { }
