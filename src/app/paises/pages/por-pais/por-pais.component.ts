import { Component, OnInit } from '@angular/core';
import { Country, NotificarPaisResultado } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public bError: boolean = false;
  public terminoMsgError: string = '';
  public listPaises: Country[] = [];

  constructor(
    public paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.paisService.notificarPaisResultado.subscribe({
      next: (response: NotificarPaisResultado) => {
        this.bError = response.bError;
        this.terminoMsgError = response.terminoMsgError;
        this.listPaises = response.listPaises;
      }
    });

  }


}
