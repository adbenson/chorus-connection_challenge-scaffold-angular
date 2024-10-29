import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class ChorusDataService {
  clientDataUrl = '/assets/data.json';

  constructor(private http: HttpClient) { }

  getChorusList(): Observable<ChorusList> {
    return this.http.get<ChorusListResponse>(this.clientDataUrl)
      .pipe(map(response => response.choruses));
  }
}
