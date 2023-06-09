import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppTabComponent } from './components/app-tab/app-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { PhoneMaskModule } from './pipes/phone-mask/phone-mask.module';

@NgModule({
  declarations: [ComponentCardComponent, AppTabComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    CodeEditorModule.forRoot(),
    PhoneMaskModule
  ],
  exports: [ComponentCardComponent, AppTabComponent, PhoneMaskModule],
})
export class SharedLayoutModule {}
