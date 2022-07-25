import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2';
import { ProductosModule } from '../productos.module';


@Component({
  selector: 'app-result-productos',
  templateUrl: './result-productos.component.html',
  styles: [
  ]
})


export class ResultProductosComponent  {

  constructor(private prodsService: ProductosService) { }

  get resultados() 
  {
     return this.prodsService.todosProductos;  
  }
 
   eliminarJuego(id: number)
   {
    Swal.fire({
      title: 'Quiere Eliminar el juego?',
      text: "Si lo eliminas no podras revertir el cambio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`Nro de id a eliminar:${id}`);
        this.prodsService.eliminarJuegoService(id)
        .subscribe();
        Swal.fire(
          'Eliminado!',
          'El juego ha sido eliminado.',
          'success'
        )
      }
    })
   }
   
}
