import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  
  @Input() public isLogged : boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.isLogged)
  }

  logOut() {
    this.authService.logout();
  }

}