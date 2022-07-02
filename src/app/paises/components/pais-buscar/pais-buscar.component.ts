import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrls: ['./pais-buscar.component.css']
})
export class PaisBuscarComponent implements OnInit {

  public termino: string = '';

  @Input('txtPlaceHolderHijo') public txtPlaceHolder: string = '';

  @Output() public onEmitirTerminoBuscar: EventEmitter<string> = new EventEmitter<string>();

  @Output() public onDebounce: EventEmitter<string> = new EventEmitter<string>();

  //Subject: es un observable especial, en este caso se emitira cuando el usuario deje
  //de escribir en el input de la busqueda
  public debouncer: Subject<string> = new Subject();

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.debouncer.pipe(
      debounceTime(300)
    )
    .subscribe({
      next: response => {
        console.log('debouncer ==>', response);
        this.onDebounce.emit(response);
      }
    });
  }

  buscar(){
    console.log(`pais-buscar.component.ts ==>${this.termino}`);
    this.onEmitirTerminoBuscar.emit(this.termino);
    //this.termino = '';
  }

  teclaPresionada(event: any){
    //Sea que se obtenga el valor del "event" o del "termino", darán los mismos resultados, ya que termino
    //es una variable asociada al input en el html
    /*
    const valor = event.target.value;
    console.log(`teclaPresionada-valor ${valor}`);
    console.log(`teclaPresionada-termino ${this.termino}`);
    */

    //Usaremos la variable "termino" pero tambien podriamos usar el valor del argumento event.
    this.debouncer.next(this.termino);
  }

}
