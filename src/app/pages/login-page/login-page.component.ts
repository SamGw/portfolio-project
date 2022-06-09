import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  model: User = {
    email: "",
    password: "",
  };

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  // A modifier quand on a un backend / veut se connecter au cri
  onClickSubmit(data: any) {
    this.authService.signIn(data);
    console.log("Entered Email : " + data.email);
    
    if (this.authService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
 }
}
