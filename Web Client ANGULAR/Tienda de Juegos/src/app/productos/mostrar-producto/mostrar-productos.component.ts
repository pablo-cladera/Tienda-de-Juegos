import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { MaterialModule } from 'src/app/material.module';
import { JuegoViewModel } from '../interfaces/productviewmodel.interface';
import { ProductoCreate } from '../interfaces/productocreate.interface';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styles: [
  ]
})

export class MostrarProductosComponent  {

  constructor(private prodsService: ProductosService) { }

  get resultados() 
  {
     return this.prodsService.todosProductos;  
  }
 
  buscarByConsola(idConsola: string)
   {
      console.log(`Nro de idConsola: ${idConsola}`);
      this.prodsService.buscarProdByConsola(idConsola);
      //.subscribe();
   }
   
}
// export class MostrarProductosComponent {

//   @ViewChild("txtMostrar") txtMostrar!:ElementRef<HTMLInputElement>;

//   // constructor(private prodService:ProductosService){

//   // }
//   get resultados() {
//      return this.prodsService.buscarProdByConsola;
     
//   }
//     buscarByConsola (juego: ProductoCreate) {
//     const Nueva = this.txtMostrar.nativeElement.value;
//     if (juego === null) return;
//     this.prodsService.buscarProdByConsola(Nueva);
//     this.txtMostrar.nativeElement.value = '';
    
//  }

//    constructor(private prodsService: ProductosService) { 
//    }

// }