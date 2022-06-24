import { AfterViewChecked, AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-project';
  constructor(private authService: AuthService, private el: ElementRef) {

  }


  isLogged() {
    return this.authService.isLoggedIn()
  }
}
