import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponentsComponent } from './template-components.component';
import { LoginFormTemplateComponent } from './login-form-template/login-form-template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponentsComponent,
    children: [

    ],
  },
  {
    path: ':id',
    component: LoginFormTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateComponentsRoutingModule {}
