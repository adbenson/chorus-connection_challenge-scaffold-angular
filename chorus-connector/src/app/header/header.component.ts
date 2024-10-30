import { Component } from '@angular/core';
import { SearchService } from '../common/search.service';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private search: SearchService) {}

  onSearchChange (event: Event) {
    this.search.setSearchText((event.target as HTMLInputElement).value || '');
  }
}
