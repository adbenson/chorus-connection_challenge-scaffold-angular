import { Component } from '@angular/core';
import { SearchService } from '../common/search.service';
import { AuthService, User } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent {

  constructor(private search: SearchService, private auth: AuthService) {}

  currentUser?: User;

  onSearchChange (event: Event) {
    this.search.setSearchText((event.target as HTMLInputElement).value || '');
  }

  ngOnInit() {
    this.auth.getCurrentUser().subscribe(u => this.currentUser = u);
  }
}
