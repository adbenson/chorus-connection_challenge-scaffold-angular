import { Component } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  imports: [LoginComponent],
})
export class LoginPageComponent {

}
