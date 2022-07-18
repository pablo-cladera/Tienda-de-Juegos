import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonaCreate } from '../interfaces/personacreate.interface';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styles: []
})

export class CreatePersonaComponent implements OnInit
 {
  miForm = this.formBuilder.group(
    {
      id: [, [Validators.required, Validators.min(1)]],
      nombre: [, [Validators.required, Validators.minLength(3)]],
      apellido: [, [Validators.required, Validators.minLength(3)]],
      idTipoPersona: [, [Validators.required, Validators.minLength(1)]],
      idTipoDocumento: [, [Validators.required, Validators.minLength(1)]],
      documento: [, [Validators.required, Validators.minLength(7)]],
      idTipoTelefono: [, [Validators.required, Validators.minLength(1)]],
      telefono: [, [Validators.required, Validators.minLength(6)]],
      email: [, [Validators.required, Validators.minLength(5)]],
      calle: [, [Validators.required, Validators.minLength(3)]],
      numeroCalle: [, [Validators.required, Validators.minLength(1)]],
      ciudad: [, [Validators.required, Validators.minLength(3)]],
      codigoPostal: [, [Validators.required, Validators.minLength(4)]]
    }
  )

  constructor(private formBuilder: FormBuilder,
              private personaService: PersonasService) { }

  ngOnInit(): void {
    const ran = 5;
    this.miForm.reset(
      {
        calle: "",
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

    const newPersona: PersonaCreate = 
    {
      id: this.miForm.controls['id'].value,
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
      ciudad: this.miForm.controls['ciudad'].value,
      codigoPostal: this.miForm.controls['codigoPostal'].value,
      
    }

    this.personaService.crear(newPersona);

    this.miForm.reset(
      {
        calle: "",
      }      
    );    
  }
}
