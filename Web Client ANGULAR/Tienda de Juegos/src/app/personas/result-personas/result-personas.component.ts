import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-result-personas',
  templateUrl: './result-personas.component.html',
  styles: [
  ]
})
export class ResultPersonasComponent {

   get resultados() {
      return this.persService.todasPersonas;
   }

  constructor(private persService: PersonasService) { }

  eliminarPersona(id: number)
  {
   Swal.fire({
     title: 'Quiere eliminar la persona?',
     text: "Si lo eliminas no podras revertir el cambio",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si, Eliminar!'
   }).then((result) => {
     if (result.isConfirmed) {
       console.log(`Nro de id a eliminar:${id}`);
       this.persService.eliminarPersona(id)
       .subscribe();
       Swal.fire(
         'Eliminado!',
         'La persona ha sido eliminado.',
         'success'
       )
     }
   })
  }

}