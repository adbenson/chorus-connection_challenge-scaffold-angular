import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ChorusDataService } from 'src/app/common/chorus-data.service';

@Component({
  standalone: true,
  selector: 'app-chorus-delete-confirm',
  templateUrl: './chorus-delete-confirm.component.html',
  styleUrls: ['./chorus-delete-confirm.component.css'],
  imports: [RouterLink, RouterModule],
})
export class ChorusDeleteConfirmComponent {

  id?: string | null;

  constructor(
    private dataService: ChorusDataService, 
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.paramMap.subscribe(paramMap => {
      this.id ||= paramMap.get('id');
    });
  }

  onDeleteConfirm() {
    this.id && this.dataService.deleteChorus(this.id);
    this.router.navigate(['/']);
  }

}
