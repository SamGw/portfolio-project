import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    PortfolioListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
