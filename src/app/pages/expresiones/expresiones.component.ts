import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {

  contador:number;

  constructor() { 
    this.contador = 1;
  }

  ngOnInit(): void {
  }

  aumentarContador(){
    this.contador++;
  }

  disminuirContador(){

    if(this.contador == 0){
      return;
    }
    this.contador--;
  }

}
