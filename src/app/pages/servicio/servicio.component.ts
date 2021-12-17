import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from 'src/app/services/servicio-prueba.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  data:any[];
  servicio:any;

  constructor( private servicioPrueba: ServicioPruebaService) { 
    this.data=[];
  }

  ngOnInit(): void {
    this.consumirServicio();
  }

  ngOnDestroy(): void {
  }

  consumirServicio(){
    this.servicio = this.servicioPrueba.getPersonajes()
    .subscribe((resp:any) => {
      this.data = resp.results;
    });
  }

}
