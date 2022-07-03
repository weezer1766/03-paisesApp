import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError, tap } from 'rxjs';
import { Country } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //private fields: string ="?fields=name,flags,population,capital,cca2";
  private fields: string ="name,flags,population,capital,cca2";

  get httpParams(): HttpParams {
    return new HttpParams().set('fields', this.fields);
  }
  /*
  private params = new HttpParams()
      .set('fields', this.fields);
  */

  private endpoint: string = 'https://restcountries.com/v3.1';
  //private endpoint: string = 'https://restcountries.com/v2';

  //https://restcountries.com/v3.1/name/peru
  //https://restcountries.com/v3.1/region/europe
  //https://restcountries.com/v3.1/capital/lima
  //https://restcountries.com/v3.1/alpha/br

  //https://restcountries.com/v2

  constructor(
    private http: HttpClient
  ) { }

  public buscarPaisPorNombre(termino: string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.endpoint}/name/${termino}`, {params: this.httpParams});

    /*
    return this.http.get<any>(`${this.endpoint}/name/${termino}`).pipe(
      catchError( e => {
        return throwError(() => e);
      })
    );
    */

    //of: es una función que genera observables el cual transforma lo que sea que se coloque entre los parentesis
    //en un nuevo observable.
    /*
    return this.http.get<any>(`${this.endpoint}/name/${termino}`).pipe(
      catchError( e => of([]))
    );
    */

  }

  public buscarPaisPorRegion(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.endpoint}/region/${termino}`, {params: this.httpParams});
  }

  public buscarPaisPorCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.endpoint}/capital/${termino}`, {params: this.httpParams})
      .pipe(
        tap(console.log)
      );
  }

  //CONSUME UN ENDPOINT QUE DEVUELVE UN ARREGLO Y LO DEVUELVE SIN TRANSFORMARLO
  /*
  public obtenerPaisPorCodigo(id: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.endpoint}/alpha/${id}`);
  }
  */

  //CONSUME UN ENDPOINT QUE DEVUELVE UN ARREGLO, PERO EL OBSERVABLE TRANSFORMA LA RESPUESTA
  //Y DEVUELVE SOLO EL PRIMER OBJETO DE DICHO ARREGLO
  public obtenerPaisPorCodigo(id: string): Observable<Country> {
    return this.http.get<Country[]>(`${this.endpoint}/alpha/${id}`).pipe(
      map(response => {
        return response[0] as Country;
      })
    );
  }

}
