## 03PaisesApp
## SERVICIO Rest
Utiliza el siguiente api rest para trabajar con los paises del mundo.
(https://restcountries.com/)

# ANIMATED.CSS
Utiliza la siguiente librería para dar animación a los resultados.
https://animate.style/

# ENLACES UTILES

Difference between [routerLink] and routerLink
https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink

# CONSEJOS
1. Si se requiere usar el routerLink, routerLinkActive, routerLinkActiveOptions en un modulo interno
entonces se debera agregar, en el archivo "module" que gestiona dicho modulo interno, la importación
al modulo que se requiere o un modulo que ya contenga dicha importación, por ejemplo: 
RouterModule --> Modulo de Angular que gestiona las rutas
AppRoutingModule --> Modulo creado por nosotros que gestiona las rutas

2. (ngSubmit): se ejecuta en un form cuando el usuario presiona enter o hace el posteo del formulario a través de un botón.

3. Actualización:
Nota de actualización:
Importante!
Restcountries.eu ya no existe, por lo que ahora se encuentra uno muy similar aquí: restcountries.com
El problema es que tiene unas pequeñas diferencias, luego verán en unos videos unas notas de actualización para que puedan apreciar los cambios y seguir los videos sin problemas.

Ajusten los nombres que verán por el nuevo enpoint.

Ejemplo:
En el video ustedes verán:
private apiUrl: string = 'https://restcountries.eu/rest/v2';

Lo cambiarán por 
private apiUrl: string = 'https://restcountries.com/v2';
Sólo tengan cuidado con los nombres y los argumentos de respuesta.

4. Usamos:
- subscribe: lo usamos dentro de un servicio cuando queremos devolver la información dentro del mismo servicio.
Este contiene tres argumentos, el "next" que es cuando se recibe información de la ejecución del observable y el
"error" que se ejecuta cuando el observable retorna un valor y el "complete" que se ejecuta cuando se ejecuto todo
y se sabe que no vamos a recibir ningun otro valor de la ejecución.

- observable: lo usamos dentro de un servicio cuando queremos devolver la información a quien sea que invoco el 
servicio. Para que un observable se dispare desde el componente que lo invoca el método dentro de dicho componente
debe estar subscrito a dicho observable.

5. of: es una función que genera observables el cual transforma lo que sea que se coloque entre los parentesis
en un nuevo observable.

6. DebounceTime: se utiliza por lo general cuando la búsqueda va a consumir un servicio rest al momento de ir tipeando
información sobre el control, el string asociado al debounce se emite cuando el usuario deja de escribir.
Para crear un debounceTime se debe utilizar la clase "Subject", este es un observable especial,
en esta aplicación, se usará para que el observable se emita cuando el usuario deje de escribir en la caja de texto
de búsqueda.

7. ngOnInit(): este método del ciclo de vida de un componente se dispara una única vez cuando el componente es creado 
y ya esta inicializado.

8. pipe al aplicarse a un suscribe de un observable, permite transformar la salida del suscribe antes de que se retorne.

9. OPERADORES DE RXJS: Operadores que transforman el producto del suscribe de un observable.

10. switchMap: Operador de RXJS de transformación, el cual permite recibir un observable y regresar otro observable, es decir,
toma el resultado de un observable y retorna un observable

11. tap: Operador que dispara un efecto secundario del observable, es decir recibe el producto del observable que lo invoca y 
con esto se puede imprimir directamente en consola

12. Formas de trabajar con "class, [class], [ngClass]":
--*******************************************************************************
[class]="(region===regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'"
--*******************************************************************************
class="btn"
[class.btn-primary]="region===regionActiva"
[class.btn-outline-primary]="region!==regionActiva"
--*******************************************************************************
[ngClass]="region==regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary'"
--*******************************************************************************
[ngClass]="{
  'btn': true,
  'btn-primary': region===regionActiva,
  'btn-outline-primary': region!==regionActiva
}"
