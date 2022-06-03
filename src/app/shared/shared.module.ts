import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
