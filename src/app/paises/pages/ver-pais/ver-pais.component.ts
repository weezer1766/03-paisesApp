import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor(
    public paisService: PaisService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarPais();
  }

  public cargarPais(): void{

    //PRIMERA FORMA
    /*
    // this.activatedRoute.paramMap.subscribe(
    //   //PRIMERA FORMA
    //   params => {
    //     let codigo = params.get('codigo')!;
      //SEGUNDA FORMA
    this.activatedRoute.params.subscribe(
      ({id}) => {
        if(id!=null){
          console.log(`cargarPais==>${id}`);
        }

        //DEVUELVE UN ARRAY DE COUNTRIES Y RETORNA SOLO EL PRIMERO
        // this.paisService.obtenerPaisPorCodigo(id).subscribe({
        //   next: (response: Country[]) =>{
        //     this.pais = response[0];
        //     console.log(this.pais);
        //   }
        // });


        //DEVUELVE UN SOLO COUNTRY
        this.paisService.obtenerPaisPorCodigo(id).subscribe({
          next: (response: Country) =>{
            this.pais = response;
            console.log(response);
          }
        });
      }
    )
    */

    //SEGUNDA FORMA - SWITCHMAP
    //switchMap: Operador de RXJS de transformación, el cual permite recibir un observable y regresar otro observable
    //tap: Operador que dispara un efecto secundario
    this.activatedRoute.params
    .pipe(
      //FORMA NORMAL
      // tap( params => {
      //   console.log(params);
      // }),
      //FORMA CORTA: Recibe el producto o resultado del observable "activatedRoute.params" y lo imprime directamente
      tap( console.log ),
      switchMap(
        //Recibe el resultado del observable anterior (params) y retorna un observable
        // params => {
        //   return this.paisService.obtenerPaisPorCodigo(params['id']);
        // }
        ({id}) => {
          return this.paisService.obtenerPaisPorCodigo(id);
        }
      ),
      //FORMA NORMAL
      // tap( pais => {
      //   console.log(pais);
      // })
      //FORMA CORTA: Recibe el producto o resultado del observable "this.paisService.obtenerPaisPorCodigo(id)" y lo imprime directamente
      tap( console.log ),
    )
    .subscribe(
      response => {
        this.pais = response;
      }
    )
  }

}
