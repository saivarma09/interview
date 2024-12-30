import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
let response  = confirm("Are you sure you want to leave the page?")
if(response === true){
return true
}
  return false;
};
