import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from '../shared-layout/header/header.component';
import { FooterComponent } from '../shared-layout/footer/footer.component';
import { PnfComponent } from './pnf/pnf.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule } from '@angular/router';
import { PortFolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [
    HomepageComponent,
    // HeaderComponent,
    // FooterComponent,
    PnfComponent,
    AboutComponent,
    ServicesComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,

  ],
  imports: [CommonModule,PortFolioRoutingModule],
  exports: [RouterModule],
})
export class PortfolioModule {}
