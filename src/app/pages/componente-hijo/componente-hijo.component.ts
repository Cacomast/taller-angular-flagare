import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnInit {

  nombreBoton1:string;
  claseBoton1:string;
  nombreBoton2:string;
  claseBoton2:string;

  constructor() { 
    this.nombreBoton1 = "Botón Success";
    this.claseBoton1 = "btn-success";
    this.nombreBoton2 = "Botón Danger";
    this.claseBoton2 = "btn-danger";
  }

  ngOnInit(): void {
  }

}
