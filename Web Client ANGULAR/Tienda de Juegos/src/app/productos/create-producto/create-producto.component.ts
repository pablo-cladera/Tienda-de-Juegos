import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductoCreate } from '../interfaces/productocreate.interface';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styles: [
  ]
})
export class CreateProductoComponent implements OnInit {
  miForm = this.formBuilder.group(
    {
      // codigo: [, [Validators.required, Validators.minLength(3)] ],
      nombre: [, [Validators.required, Validators.minLength(3)]],
      genero: [, [Validators.required, Validators.min(1)]],
      consola: [, [Validators.required, Validators.min(1)]],
      stock: [, [Validators.required, Validators.min(0)]]
      // stockmin: [, [Validators.required, Validators.min(0)]],
      // stockmax: [, [Validators.required, Validators.min(0)]]
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

  tieneerror(field:string){
    return this.miForm.controls[field].errors &&
           this.miForm.controls[field].touched;
  }

  guardar(){
    if (this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log('guardando producto');

    const newprod: ProductoCreate = {
      // codigo: this.miForm.controls['codigo'].value,
      // id: this.miForm.controls['id'].value,
      nombre: this.miForm.controls['nombre'].value,
      idGenero: this.miForm.controls['genero'].value,
      idConsola: this.miForm.controls['consola'].value,
      stock: this.miForm.controls['stock'].value,
      // stockMin: this.miForm.controls['stockmin'].value,
      // stockMax: this.miForm.controls['stockmax'].value,
    }

    this.productoService.crear(newprod);

    this.miForm.reset(
      {
        stock : 5
      }      
    );    
  }
}
