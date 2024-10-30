import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, Subject, zip } from 'rxjs';

interface ChorusListResponse {
  choruses: ChorusList,
}

export type ChorusList = Array<Chorus>;

export interface Chorus {
  id: string,
  name: string,
  description: string,
  contactEmail: string,
  location: {
    city: string,
    state: string,
  }
}

type ChorusLookup = Record<string, Chorus | undefined>;

const listToLookup = (list: ChorusList): ChorusLookup => {
    return list.reduce<ChorusLookup>((lookup, chorus) => {
      lookup[chorus.id] = chorus;
      return lookup;
    }, {});
}

function lookupToList<T>(lookup: Record<string, T | undefined>): Array<T> {
  return Object.values(lookup).filter(c => !!c) as Array<T>;
}

@Injectable({
  providedIn: 'root'
})
export class ChorusDataService {
  clientDataUrl = '/assets/data.json';

  private chorusLookup$: BehaviorSubject<ChorusLookup>;

  constructor(private http: HttpClient) {
    this.http.get<ChorusListResponse>(this.clientDataUrl)
      .pipe(map(response => response.choruses))
      .subscribe(list => this.chorusLookup$.next(listToLookup(list)));

      this.chorusLookup$ = new BehaviorSubject<ChorusLookup>({});
  }

  getChorusList(): Observable<ChorusList> {
    return this.chorusLookup$.pipe(map(lookupToList));
  }

  getChorus(id: string): Observable<Chorus | undefined> {
    return this.chorusLookup$.pipe(map(l => l[id]));
  }

  deleteChorus(id: string): void {
    this.update(id, undefined);
  }

  upsertChorus(chorus: Chorus): void {
    this.update(chorus.id, chorus);
  }

  private update(id: string, chorus: Chorus | undefined): void {
    const current = this.chorusLookup$.getValue();
    this.chorusLookup$.next({...current, [id]: chorus});
  }
}
