import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PortfolioListComponent } from './pages/portfolio-list/portfolio-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent  } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portfolio-list', component: PortfolioListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
