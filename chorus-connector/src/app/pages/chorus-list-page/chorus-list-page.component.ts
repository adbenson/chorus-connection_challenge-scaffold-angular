import { Component } from '@angular/core';
import { ChorusListComponent } from 'src/app/chorus/chorus-list/chorus-list.component';

@Component({
  standalone: true,
  selector: 'app-chorus-list-page',
  templateUrl: './chorus-list-page.component.html',
  styleUrls: ['./chorus-list-page.component.css'],
  imports: [
    ChorusListComponent,
  ]
})
export class ChorusListPageComponent {

}
