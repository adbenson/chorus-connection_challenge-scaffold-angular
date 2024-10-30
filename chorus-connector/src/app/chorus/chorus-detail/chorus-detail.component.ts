import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Chorus, ChorusDataService } from 'src/app/common/chorus-data.service';

@Component({
  standalone: true,
  selector: 'app-chorus-detail',
  templateUrl: './chorus-detail.component.html',
  styleUrls: ['./chorus-detail.component.css'],
  imports: [CommonModule, RouterLink],
})
export class ChorusDetailComponent {

  chorus?: Chorus | undefined;

  canEdit = false;
  canDelete = false;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private chorusData: ChorusDataService,
  ) {}

  ngOnInit() {
    this.auth.isAuthorized('edit').subscribe(p => this.canEdit = p);
    this.auth.isAuthorized('delete').subscribe(p => this.canDelete = p);

    const id = this.route.snapshot.paramMap.get('id');

    if (id && id !== 'new') {
      this.chorusData.getChorus(id).subscribe(chorus => this.chorus = chorus);
    }
  }

}
