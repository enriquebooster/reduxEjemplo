import {Component, Input, EventEmitter , OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id = 0;
  @Input() titulo = '';
  @Input() descripcion = '';
  @Input() imagen = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComprar = new EventEmitter <number>();
  constructor() { }

  ngOnInit(): void {
  }

  clickComprar(): void {
    this.onComprar.emit(this.id);
  }
}
