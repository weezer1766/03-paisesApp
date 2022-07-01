import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorCapitalComponent } from "./paises/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./paises/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./paises/pages/por-region/por-region.component";
import { VerPaisComponent } from "./paises/pages/ver-pais/ver-pais.component";

//pathMatch: permite indicar que es el primer componente de ese path que se
//mostrara cuando carga la aplicaciòn es decir por ejemplo "https//localhost:4200"

//path: '**', redirectTo: '': Permite indicar que cualquier otra ruta que no coincida
//con las definidas se redirigiran a la primera que es la principal

//Difference between [routerLink] and routerLink
//https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink
const routes: Routes = [
  {path: '', component: PorPaisComponent, pathMatch: 'full'},
  {path: 'region', component: PorRegionComponent},
  {path: 'capital', component: PorCapitalComponent},
  {path: 'pais/:id', component: VerPaisComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) //forRoot: Rutas principales / forChild: Rutas hijas
                                 //solo se permite tener un solo forRoot a nivel de aplicación
                                 //cualquier otras rutas serán rutas hijas
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule{}
