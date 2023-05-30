import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from './component-card/component-card.component';

@NgModule({
  declarations: [ComponentCardComponent],
  imports: [CommonModule],
  exports: [ComponentCardComponent],
})
export class SharedLayoutModule {}
