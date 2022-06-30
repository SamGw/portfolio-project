import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavMenuComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSnackBarModule,
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    SkillComponent,
    ProjectComponent,
  ]
})
export class SharedModule { }
