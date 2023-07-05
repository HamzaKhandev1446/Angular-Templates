import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppTabComponent } from './components/app-tab/app-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ComponentCardComponent } from './components/component-card/component-card.component';
import { PhoneMaskModule } from './pipes/phone-mask/phone-mask.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ComponentCardComponent,
    AppTabComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatIconModule,
    CodeEditorModule.forRoot(),
    PhoneMaskModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    ComponentCardComponent,
    AppTabComponent,
    PhoneMaskModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedLayoutModule {}
