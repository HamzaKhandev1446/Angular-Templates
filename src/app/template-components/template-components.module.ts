import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateComponentsComponent } from './template-components.component';
import { TemplateComponentsRoutingModule } from './template-components-routing.module';
import { SharedLayoutModule } from '../shared-layout/shared-layout.module';
import { LoginFormTemplateComponent } from './login-form-template/login-form-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [TemplateComponentsComponent, LoginFormTemplateComponent],
  imports: [
    CommonModule,
    TemplateComponentsRoutingModule,
    SharedLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  exports: [RouterModule],
})
export class TemplateComponentsModule {}
