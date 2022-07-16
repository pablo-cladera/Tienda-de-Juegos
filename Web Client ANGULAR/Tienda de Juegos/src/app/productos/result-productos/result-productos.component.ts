import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { MaterialModule } from 'src/app/material.module';
import { JuegoViewModel } from '../interfaces/productviewmodel.interface';

@Component({
  selector: 'app-result-productos',
  templateUrl: './result-productos.component.html',
  styles: [
  ]
})
export class ResultProductosComponent {

  @ViewChild("txtEliminar") txtEliminar!:ElementRef<HTMLInputElement>;

  // constructor(private prodService:ProductosService){

  // }
  get resultados() {
     return this.prodsService.todosProductos;
     
  }
    eliminar (juego: JuegoViewModel) {
    const Nueva = this.txtEliminar.nativeElement.valueAsNumber;
    if (juego === null) return;
    this.prodsService.eliminarService(juego.id);
    this.txtEliminar.nativeElement.value = '';
    
 }

   constructor(private prodsService: ProductosService) { 
   }

}
