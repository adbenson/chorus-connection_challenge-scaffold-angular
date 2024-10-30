import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface User {
  username: string;
  password: string;
  name: string;
}

export type AuthResult = 'invalidUser' | 'invalidPassword' | 'systemError' | 'success';

const users: Array<User> = [
  {
    username: 'admin',
    password: 'pw1',
    name: 'Admin Istrator',
  },
  {
    username: 'user',
    password: 'pw',
    name: 'Guy Incognito'
  }
];

export type Permissions = 'add' | 'edit' | 'delete';

const permissions: Record<string, Array<Permissions>> = {
  'admin': ['add', 'edit', 'delete'],
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser$ = new BehaviorSubject<User | undefined>(undefined);

  private userLookup = users.reduce<Record<string, User>>(
    (lookup, user) => ({
      ...lookup,
      [user.username]: user,
    }), {})

  constructor() { 

  }

  authenticate(username: string, password: string): AuthResult {
    this.currentUser$.next(undefined);

    const user = this.userLookup[username];

    if (!user) {
      return 'invalidUser';
    }

    if (user.password !== password) {
      return 'invalidPassword';
    }

    this.currentUser$.next(user);
    return 'success';
  }

  isAuthorized(permission: Permissions): Observable<boolean> {
    return this.currentUser$.pipe(map(user =>
      user ? permissions[user.username].includes(permission) : false
    ));
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.currentUser$.asObservable();
  }
}
