import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TemplateComponentsComponent } from './template-components.component';
import { TemplateComponentsRoutingModule } from './template-components-routing.module';

@NgModule({
  declarations: [TemplateComponentsComponent],
  imports: [CommonModule, TemplateComponentsRoutingModule],
  exports: [RouterModule],
})
export class TemplateComponentsModule {}
