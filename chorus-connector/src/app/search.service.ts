import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends BehaviorSubject<string> {

  constructor() {
    super('');
  }

  setSearchText (text: string): void {
    this.next(text);
  }
}
