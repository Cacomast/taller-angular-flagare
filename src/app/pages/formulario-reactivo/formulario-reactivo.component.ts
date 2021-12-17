import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { 

    this.form = this.fb.group({
      nombre:['', [Validators.required, Validators.maxLength(50)]],
      apellido:['', [Validators.required, Validators.maxLength(50)]],
      correo:['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {

  }

  get nombreNoValido() {
    return this.form.get('nombre')?.invalid && this.form.get('nombre')?.touched;
  }

  get apellidoNoValido() {
    return this.form.get('apellido')?.invalid && this.form.get('apellido')?.touched;
  }

  get correoNoValido() {
    return this.form.get('correo')?.invalid && this.form.get('correo')?.touched;
  }

  private crearFormulario() {

    this.form = this.fb.group({
      nombre:['', [Validators.required, Validators.maxLength(50)]],
      apellido:['', [Validators.required, Validators.maxLength(50)]],
      correo:['', [Validators.required, Validators.email]]
    });
  }


  enviarFormulario(){
 
    if (this.form.invalid) { 

      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    Swal.fire({
      title: 'Perfecto!',
      text: 'El formulario es correcto',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    console.log(this.form);
  }

}
