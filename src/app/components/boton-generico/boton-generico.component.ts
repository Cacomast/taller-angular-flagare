import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-generico',
  templateUrl: './boton-generico.component.html',
  styleUrls: ['./boton-generico.component.css']
})
export class BotonGenericoComponent implements OnInit {

  @Input('nombre') nombre:string;
  @Input('clase') clase:string;

  constructor() { 
    this.nombre = 'valor genérico';
    this.clase = 'btn-success';
  }

  ngOnInit(): void {
  }

}
