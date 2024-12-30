import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let loginUser = confirm("are you admin?");
  if (loginUser === true) {
    return true;
  }
  return false

};
