import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public termino: string = '';
  public bError: boolean = false;
  //public terminoMsgError: string = '';
  public listPaises: Country[] = [];

  public listPaisesCoincidencia: Country[] = [];

  public txtPlaceHolder: string = 'Buscar por nombre de país...';

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
    this.listPaisesCoincidencia = [];

    this.paisService.buscarPaisPorNombre(this.termino).subscribe({
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
    console.log(`coincidencias=> ${event}`);

    this.bError = false;
    this.termino = event;
    this.listPaisesCoincidencia = [];

    //CREANDO SUGERENCIAS
    this.paisService.buscarPaisPorNombre(event).subscribe({
      next: response =>{
        this.listPaisesCoincidencia = response.splice(0,5);
      },
      error: err => {
        console.log(err);
        this.bError = true;
      }
    });
  }

}
