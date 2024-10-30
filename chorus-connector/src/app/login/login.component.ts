import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthResult, AuthService } from '../auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  
  username = '';
  password = '';

  result?: AuthResult;

  constructor(private auth: AuthService, private router: Router) {

  }

  onSubmit() {
    this.result = this.auth.authenticate(this.username, this.password);

    if (this.result === 'success') {
      // TODO: redirect to original destination
      this.router.navigate(['/']);
    }
  }
}
