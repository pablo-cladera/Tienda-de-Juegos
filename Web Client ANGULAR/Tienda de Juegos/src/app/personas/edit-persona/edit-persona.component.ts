import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PersonaCreate } from '../interfaces/personacreate.interface';
import { PersonasService } from '../services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: [ './edit-persona.component.scss' ]
})

export class EditPersonaComponent implements OnInit {
  miForm = this.formBuilder.group(
    {
      nombre: [, [Validators.required, Validators.minLength(3)]],
      apellido: [, [Validators.required, Validators.minLength(3)]],
      idTipoPersona: [, [Validators.required, Validators.minLength(1)]],
      idTipoDocumento: [, [Validators.required, Validators.minLength(1)]],
      documento: [, [Validators.required, Validators.minLength(7)]],
      idTipoTelefono: [, [Validators.required, Validators.minLength(1)]],
      telefono: [, [Validators.required, Validators.minLength(10)]],
      email: [, [Validators.required, Validators.email]],
      calle: [, [Validators.required, Validators.minLength(1)]],
      numeroCalle: [, [Validators.required, Validators.minLength(1)]],
      idCiudad: [, [Validators.required, Validators.minLength(1)]],
      codigoPostal: [, [Validators.required, Validators.minLength(4)]]
    }
  )

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder,
              private personasService: PersonasService) { }

  ngOnInit(): void {
    const ran = 5;
    this.miForm.reset(
      {
        calle: "",
      }
    ); 
  }

  clear(): void{
    this.miForm.reset(
      {
        nombre: null,
        apellido: null,
        idTipoPersona: null,
        idTipoDocumento: null,
        documento: null,
        idTipoTelefono: null,
        telefono: null,
        email: null,
        calle: null,
        numeroCalle: null,
        idCiudad: null,
        codigoPostal: null,
      }
    ); 
  }

  tieneError(field:string)
  {
    return this.miForm.controls[field].errors &&
           this.miForm.controls[field].touched;
  }

  guardar()
  {
    if (this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log('guardando persona');

    Swal.fire({
     position: 'top-end',
     icon: 'success',
     title: 'La Persona ha sido registrada con exito!',
     showConfirmButton: false,
     timer: 1500
   })

    const newPersona: PersonaCreate = {
      nombre: this.miForm.controls['nombre'].value,
      apellido: this.miForm.controls['apellido'].value,
      idTipoPersona: this.miForm.controls['idTipoPersona'].value,
      idTipoDocumento: this.miForm.controls['idTipoDocumento'].value,
      documento: this.miForm.controls['documento'].value,
      idTipoTelefono: this.miForm.controls['idTipoTelefono'].value,
      telefono: this.miForm.controls['telefono'].value,
      email: this.miForm.controls['email'].value,
      calle: this.miForm.controls['calle'].value,
      numeroCalle: this.miForm.controls['numeroCalle'].value,
      idCiudad: this.miForm.controls['idCiudad'].value,
      codigoPostal: this.miForm.controls['codigoPostal'].value 
    }

    this.personasService.crear(newPersona);

    this.miForm.reset(
      {
        calle: "",
      }      
    );  
  }
}
