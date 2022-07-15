import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaCreate } from '../interfaces/personacreate.interface';
import { PersonasService } from '../services/personas.service';


@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styles: [
  ]
})

export class CreatePersonaComponent implements OnInit
 {
  miForm = this.formBuilder.group(
    {
      dni: [, [Validators.required, Validators.minLength(4)] ],
      nombre: [, [Validators.required, Validators.minLength(3)]],
      apellido: [, [Validators.required, Validators.minLength(3)]],
      telefono: [, [Validators.required, Validators.minLength(3)]],
      nombreCiudad: [, [Validators.required, Validators.minLength(3)]],
      nombreCalle: [, [Validators.required, Validators.minLength(3)]],
      numeroCalle: [, [Validators.required, Validators.minLength(2)]],
      codigoPostal: [, [Validators.required, Validators.minLength(3)]]
    }
  )

  constructor(private formBuilder: FormBuilder,
              private personaService: PersonasService) { }

  ngOnInit(): void {
    const ran = 5;
    this.miForm.reset(
      {
        stock : 5
      }
    ); 
  }

  tieneerror(field:string)
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

    const newpers: PersonaCreate = 
    {
      dni: this.miForm.controls['dni'].value,
      nombre: this.miForm.controls['nombre'].value,
      apellido: this.miForm.controls['apellido'].value,
      telefono: this.miForm.controls['telefono'].value,
      nombreCiudad: this.miForm.controls['nombreCiudad'].value,
      nombreCalle: this.miForm.controls['nombreCalle'].value,
      numeroCalle: this.miForm.controls['numeroCalle'].value,
      codigoPostal: this.miForm.controls['codigoPostal'].value,
      
    }

    this.personaService.crear(newpers);

    this.miForm.reset(
      {
        stock : 5
      }      
    );    
  }
}
