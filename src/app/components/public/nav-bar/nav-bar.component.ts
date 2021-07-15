import { Component, OnInit } from '@angular/core';
import {ConstantesClass} from '../../../clases/constantesClass';
import {Store} from '@ngrx/store';
import {AppStateUpdateNav} from '../../../app.reducers';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private constantes = new ConstantesClass();
  public listaNum: number [] = [];
  constructor( private store: Store <AppStateUpdateNav>) {

    this.store.subscribe(
      res => {
      console.log(res);
      if (res.updateNav){
        //console.log(this.constantes.getSomeInt(this.constantes.IDCOMPRA));

        this.listaNum.push(this.constantes.getSomeInt(this.constantes.IDCOMPRA));
      }
    });
  }

  ngOnInit(): void {

    const idComprado = this.constantes.getSomeInt(this.constantes.IDCOMPRA);

    console.log('la nav solo recibe el id: ' + idComprado);

  }

}
