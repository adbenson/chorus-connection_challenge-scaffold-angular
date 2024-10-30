import { CanActivateFn } from '@angular/router';
import { AuthService, Permissions } from './auth.service';
import { inject } from '@angular/core';

export const authGuardFactory = (permission: Permissions): CanActivateFn => {
  return () => inject(AuthService).isAuthorized(permission);
}
