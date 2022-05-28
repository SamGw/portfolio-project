import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioListComponent } from './pages/portfolio-list/portfolio-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';

const routes: Routes = [
  { path: 'Footer', component: FooterComponent},
  { path: 'portfolio-list', component: PortfolioListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
