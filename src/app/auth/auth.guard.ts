import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user.pipe(
    take(1),
    map(user => {
      const isAuthenticated = !!user;
      if(isAuthenticated) {
        return true;
      }

      return router.parseUrl('/account/login');
    })
  )
};
