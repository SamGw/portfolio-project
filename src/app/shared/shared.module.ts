import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavMenuComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    SkillComponent,
  ]
})
export class SharedModule { }
