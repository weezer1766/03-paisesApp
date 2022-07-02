import { NotificarPaisResultado, Country } from '../../interfaces/pais-interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-buscar',
  templateUrl: './pais-buscar.component.html',
  styleUrls: ['./pais-buscar.component.css']
})
export class PaisBuscarComponent implements OnInit {

  public termino: string = '';
  public terminoMsgError: string = '';
  public bError: boolean = false;

  public listPaises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(): void{
    console.log(this.termino);

    let notificarPaisResultado: NotificarPaisResultado = {
      bError: false,
      terminoMsgError: '',
      listPaises: []
    };

    this.bError = false;
    this.terminoMsgError = '';
    this.listPaises = [];

    this.paisService.buscarPaisPorNombre(this.termino).subscribe({
      next: response => {
        this.termino = '';
        this.listPaises = response as Country[];

        //NOTIFICAR RESULTADO
        notificarPaisResultado.bError = this.bError;
        notificarPaisResultado.terminoMsgError = this.terminoMsgError;
        notificarPaisResultado.listPaises = this.listPaises;
        this.paisService.notificarPaisResultado.emit(notificarPaisResultado);
      },
      error: err => {
        console.log(err);
        this.bError = true;
        this.terminoMsgError = this.termino;
        this.termino = '';

        //NOTIFICAR RESULTADO
        notificarPaisResultado.bError = this.bError;
        notificarPaisResultado.terminoMsgError = this.terminoMsgError;
        notificarPaisResultado.listPaises = this.listPaises;
        this.paisService.notificarPaisResultado.emit(notificarPaisResultado);
      }
    });
  }

}
