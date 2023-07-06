import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { TemplateComponentsModule } from './template-components/template-components.module';

// import { AuthGuard } from './libs/ui/middlewares/AuthGuard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((mod) => mod.PortfolioModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./template-components/template-components.module').then(
        (mod) => mod.TemplateComponentsModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
