import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export class Credentials {
  constructor(
    public username: string,
    public password: string,
  ) {}
}

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {

  credentials: Credentials = {
    username: '',
    password: '',
  };

  onSubmit() {
    
  }
}
