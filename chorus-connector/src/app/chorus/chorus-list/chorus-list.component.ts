import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, map, Observable, of } from 'rxjs';
import { Chorus, ChorusDataService, ChorusList } from 'src/app/common/chorus-data.service';
import { SearchService } from 'src/app/common/search.service';
import { ChorusSummaryComponent } from '../chorus-summary/chorus-summary.component';
import { RouterLink } from '@angular/router';

const filterByName = (list: ChorusList, search: string): ChorusList => {
  return list.filter(chorus => !search || chorus.name.toLowerCase().includes(search.toLowerCase()))
}

const sortByName = (a: Chorus, b: Chorus) => {
  return a.name.localeCompare(b.name);
}

@Component({
  standalone: true,
  selector: 'app-chorus-list',
  templateUrl: './chorus-list.component.html',
  styleUrls: ['./chorus-list.component.css'],
  imports: [CommonModule, RouterLink, ChorusSummaryComponent]
})
export class ChorusListComponent {
  chorusList$: Observable<ChorusList> = of([]);

  constructor(private chorusDataService: ChorusDataService, private search: SearchService) {

  }

  ngOnInit() {
    const source = this.chorusDataService.getChorusList();

    const withSearch = combineLatest([
      source,
      this.search,
    ]);

    this.chorusList$ = withSearch.pipe(
      map(([list, search]) => filterByName(list, search)),
      map(list => list.sort(sortByName)),
    );
  }
}
