import {Action} from '@ngrx/store';
import {
  NAVUPDATE,
  NONAVUPDATE
} from './redirect.residentes.action';



// redirecciona registro primera vez residentes
// tslint:disable-next-line:typedef
export function updateNavIdReducer(state: boolean = false, action: Action) {

  switch (action.type) {
    case NAVUPDATE:
      return true;

    case NONAVUPDATE:
      return false;

    default:
      return state;

  }


}

