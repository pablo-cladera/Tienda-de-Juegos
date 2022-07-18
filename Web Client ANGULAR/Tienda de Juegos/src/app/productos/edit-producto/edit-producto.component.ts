import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductoCreate } from '../interfaces/productocreate.interface';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styles: [
  ]
})
export class EditProductoComponent implements OnInit {
  miForm = this.formBuilder.group(
    {
      id: [, [Validators.required, Validators.minLength(1)] ],
      nombre: [, [Validators.required, Validators.minLength(3)]],
      idGenero: [, [Validators.required, Validators.min(1)]],
      idConsola: [, [Validators.required, Validators.min(1)]],
      idDesarrolladores: [, [Validators.required, Validators.min(1)]],
      idClasificacion: [, [Validators.required, Validators.min(1)]],
      añoLanzamiento: [, [Validators.required, Validators.min(1)]],
      precio: [, [Validators.required, Validators.min(1)]],
      stock: [, [Validators.required, Validators.min(0)]],
      stockmin: [, [Validators.required, Validators.min(0)]],
      stockmax: [, [Validators.required, Validators.min(0)]]
    }
  )

  constructor(private formBuilder: FormBuilder,
              private productoService: ProductosService) { }

  ngOnInit(): void {
    const ran = 5;
    this.miForm.reset(
      {
        stock : 5
      }
    ); 
  }

  tieneError(field:string){
    return this.miForm.controls[field].errors &&
           this.miForm.controls[field].touched;
  }

  guardar(){
    if (this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log('guardando juego');

    const newJuego: ProductoCreate = {

      id: this.miForm.controls['id'].value,
      nombre: this.miForm.controls['nombre'].value,
      idGenero: this.miForm.controls['idGenero'].value,
      idConsola: this.miForm.controls['idConsola'].value,
      idDesarroladores: this.miForm.controls['idDesarrolladores'].value,
      idClasificacion: this.miForm.controls['idClasificacion'].value,
      añoLanzamiento: this.miForm.controls['añoLanzamiento'].value,
      precio: this.miForm.controls['precio'].value,
      stock: this.miForm.controls['stock'].value,
      stockMin: this.miForm.controls['stockmin'].value,
      stockMax: this.miForm.controls['stockmax'].value,
    }

    this.productoService.upload(newJuego);

    this.miForm.reset(
      {
        stock : 5
      }      
    );    
  }
}
