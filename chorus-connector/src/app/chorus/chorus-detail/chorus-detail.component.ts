import { Component, Input } from '@angular/core';
import { Chorus } from 'src/app/common/chorus-data.service';

@Component({
  standalone: true,
  selector: 'app-chorus-detail',
  templateUrl: './chorus-detail.component.html',
  styleUrls: ['./chorus-detail.component.css']
})
export class ChorusDetailComponent {

  @Input() chorus?: Chorus | null;

}
