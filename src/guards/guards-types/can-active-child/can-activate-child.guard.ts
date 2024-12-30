import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  let loginUser = confirm("are you admin?");
  if (loginUser === true) {
    return true;
  }
  return false

};
