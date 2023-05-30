import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateComponentsComponent } from './template-components.component';
import { TemplateComponentsRoutingModule } from './template-components-routing.module';
import { SharedLayoutModule } from '../shared-layout/shared-layout.module';

@NgModule({
  declarations: [TemplateComponentsComponent],
  imports: [CommonModule, TemplateComponentsRoutingModule, SharedLayoutModule],
  exports: [RouterModule],
})
export class TemplateComponentsModule {}
