import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ChorusDetailComponent } from 'src/app/chorus/chorus-detail/chorus-detail.component';
import { Chorus, ChorusDataService } from 'src/app/common/chorus-data.service';

@Component({
  standalone: true,
  selector: 'app-chorus-detail-page',
  templateUrl: './chorus-detail-page.component.html',
  styleUrls: ['./chorus-detail-page.component.css'],
  imports: [CommonModule, ChorusDetailComponent],
})
export class ChorusDetailPageComponent {
  chorus$: Observable<Chorus | undefined> = of();

  constructor(
    private route: ActivatedRoute,
    private chorusData: ChorusDataService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.chorus$ = this.chorusData.getChorus(id);
    }
  }
}
