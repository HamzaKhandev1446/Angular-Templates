import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskPipe } from './phone-mask.pipe';



@NgModule({
  declarations: [PhoneMaskPipe],
  imports: [
    CommonModule
  ],
  exports:[PhoneMaskPipe]
})
export class PhoneMaskModule { }
