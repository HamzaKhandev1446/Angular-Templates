import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCardComponent } from './component-card/component-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComponentCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ComponentCardComponent],
})
export class SharedLayoutModule {}
