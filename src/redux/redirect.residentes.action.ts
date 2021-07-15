import {Action} from '@ngrx/store';

export const NAVUPDATE = '[update] ActualizarElIdQueCompraEnLaNavBar';
export const NONAVUPDATE = '[update] NoActualizarElIdQueCompraEnLaNavBar';


//  redirecciona registro primera vez residentes
export class UpdateNavAction implements Action {
  readonly type = NAVUPDATE;
}

export class NotUpdateNavAction implements Action {
  readonly type = NONAVUPDATE;
}

