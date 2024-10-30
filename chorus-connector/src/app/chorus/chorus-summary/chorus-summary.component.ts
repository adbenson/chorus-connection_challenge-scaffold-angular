import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Chorus } from 'src/app/common/chorus-data.service';

@Component({
  standalone: true,
  selector: 'app-chorus-summary',
  templateUrl: './chorus-summary.component.html',
  styleUrls: ['./chorus-summary.component.css'],
  imports: [RouterLink],
})
export class ChorusSummaryComponent {

  @Input() chorus?: Chorus;
}
