import { Component, OnInit } from '@angular/core';
import {Card} from '../../../models/card';
import {ConstantesClass} from '../../../clases/constantesClass';
import {Store} from "@ngrx/store";
import {AppStateUpdateNav} from "../../../app.reducers";
import {NotUpdateNavAction, UpdateNavAction} from "../../../../redux/redirect.residentes.action";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public numero1 = 0;
  public numero2 = 2;
  public listcards: Card [] = [];
  private constantes = new ConstantesClass();
  constructor( private store: Store <AppStateUpdateNav>) {
    const card: Card = {
      id: 1,
      nombre: 'titulo',
      texto: 'text',
      imagen: 'https://ng-bootstrap.github.io/img/logo-stack.png',
    };
    this.listcards.push(card);

    const card2: Card = {
      id: 2,
      nombre: 'titulo2',
      texto: 'text2',
      imagen: 'https://ng-bootstrap.github.io/img/logo-stack.png',
    };
    this.listcards.push(card2);

  }

  ngOnInit(): void {

   // console.log(this.numero1);
   // alert('hola');
  }
  public metodo(): number{
    let num = 0;
    // tslint:disable-next-line:triple-equals
    if (num == 1) {
      num = 1;
    }else {
      num = 3;
    }
    return 1;
  }


  public onComprar($event: number): void {
    console.log('compar el item ' + $event );
    this.constantes.setSomeInt(this.constantes.IDCOMPRA, $event);
    const action = new UpdateNavAction();
    this.store.dispatch(action);
    // redux dejar de recargar
    const action2 = new NotUpdateNavAction();
    this.store.dispatch(action2);

  }
}
