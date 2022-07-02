import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  public termino: string = '';
  public bError: boolean = false;
  //public terminoMsgError: string = '';
  public listPaises: Country[] = [];

  public txtPlaceHolder: string = 'Buscar por nombre de capital...';

  constructor(
    public paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void{
    console.log(`por-pais.component.ts ==>${termino}`);

    this.bError = false;
    this.termino = termino;
    //this.terminoMsgError = '';
    this.listPaises = [];

    this.paisService.buscarPaisPorCapital(this.termino).subscribe({
      next: response => {
        this.listPaises = response;
      },
      error: err => {
        console.log(err);
        this.bError = true;
        //this.terminoMsgError = termino;
      }
    });
  }

  coincidencias(event: any){
    this.bError = false;
    console.log(`coincidencias=> ${event}`);
    //CREANDO SUGERENCIAS
  }

}
