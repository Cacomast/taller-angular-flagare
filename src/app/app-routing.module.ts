import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponenteHijoComponent } from './pages/componente-hijo/componente-hijo.component';
import { ExpresionesComponent } from './pages/expresiones/expresiones.component';
import { FormularioReactivoComponent } from './pages/formulario-reactivo/formulario-reactivo.component';
import { ServicioComponent } from './pages/servicio/servicio.component';

const routes: Routes = [
  {path:'', redirectTo:'/expresiones', pathMatch:'full'},
  {path:'expresiones', component:ExpresionesComponent},
  {path:'componente-hijo', component:ComponenteHijoComponent},
  {path:'formulario-reactivo', component:FormularioReactivoComponent},
  {path:'servicio', component:ServicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
