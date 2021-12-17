import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { ExpresionesComponent } from './pages/expresiones/expresiones.component';
import { ComponenteHijoComponent } from './pages/componente-hijo/componente-hijo.component';
import { FormularioReactivoComponent } from './pages/formulario-reactivo/formulario-reactivo.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { BotonGenericoComponent } from './components/boton-generico/boton-generico.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ExpresionesComponent,
    ComponenteHijoComponent,
    FormularioReactivoComponent,
    ServicioComponent,
    BotonGenericoComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
