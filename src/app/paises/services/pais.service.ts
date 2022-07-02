import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Country } from '../interfaces/pais-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endpoint: string = 'https://restcountries.com/v3.1';
  //private endpoint: string = 'https://restcountries.com/v2';

  //https://restcountries.com/v3.1/name/peru
  //https://restcountries.com/v3.1/region/europe
  //https://restcountries.com/v3.1/capital/lima

  //https://restcountries.com/v2

  private _notificarPaisResultado = new EventEmitter<any>();

  get notificarPaisResultado(): EventEmitter<any>{
    return this._notificarPaisResultado;
  }

  constructor(
    private http: HttpClient
  ) { }

  public buscarPaisPorNombre(termino: string): Observable<Country[]> {

    return this.http.get<Country[]>(`${this.endpoint}/name/${termino}`);

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

  public buscarPaisPorRegion(termino: string): void {

  }

  public buscarPaisPorCapital(termino: string): void {

  }
}
