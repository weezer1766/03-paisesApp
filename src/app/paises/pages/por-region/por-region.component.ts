import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  public regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regionActiva!: string;

  public listPaises: Country[] = [];

  constructor(
    public paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  public getClaseRegionCSS(region: string): string{
    return (region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  public mostrarRegion(regionActiva: string): void{
  //mostrarRegion(event: any){

    if(regionActiva === this.regionActiva){
      return;
    }
    this.regionActiva = regionActiva;
    //console.log(event);
    //this.regionActiva = event.target.textContent;
    this.buscar(this.regionActiva);
  }

  buscar(termino: string): void{

    console.log(`por-region.component.ts ==>${termino}`);
    this.listPaises = [];

    this.paisService.buscarPaisPorRegion(termino).subscribe({
      next: response => {
        this.listPaises = response;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
